import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { AnimeQuote } from 'src/app/helpers/interfaces';
import { Utils } from 'src/app/helpers/utilties';
import { AnimeQuotesService } from 'src/app/services/anime-quotes/anime-quotes.service';

@Component({
  selector: 'app-anime-quote',
  templateUrl: './anime-quote.component.html',
  styleUrls: ['./anime-quote.component.scss'],
})
export class AnimeQuoteComponent implements OnInit {
  loader!: boolean;
  results!: AnimeQuote[];

  query = new FormControl('');
  titles!: string[];
  showTitles: boolean = false;
  filteredTitles!: Observable<string[]>;

  constructor(private aqs: AnimeQuotesService) {}

  ngOnInit() {
    this.initDb();
    this.filteredTitles = this.query.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    );
  }

  initDb() {
    this.loader = true;
    this.aqs.getData().subscribe((res) => {
      this.aqs.quotesDb = res;
      this.random();
      this.getTitles();
      this.loader = false;
    });
  }

  random() {
    this.showTitles = false;
    this.results = Utils.shuffleArray(this.aqs.quotesDb)
      .slice(0, 50)
      .sort((a, b) => a.ID - b.ID);
  }

  getTitles() {
    this.titles = Utils.uniqueArray(
      this.aqs.quotesDb.map((res) => {
        return res.anime;
      })
    ).sort();
    console.log(this.titles);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.titles.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }

  filterAnime(title: string) {
    this.showTitles = false;
    this.results = this.aqs.quotesDb
      .filter((res) => res.anime == title)
      .sort((a, b) => a.ID - b.ID);
  }
}
