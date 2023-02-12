import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { AnimeQuote } from 'src/app/helpers/interfaces';
import { Utils } from 'src/app/helpers/utilties';

@Component({
  selector: 'app-anime-quote',
  templateUrl: './anime-quote.component.html',
  styleUrls: ['./anime-quote.component.scss'],
})
export class AnimeQuoteComponent implements OnInit {
  loader!: boolean;
  quotesDb!: AnimeQuote[];
  results!: AnimeQuote[];

  query = new FormControl('');
  titles!: string[];
  showTitles: boolean = false;
  filteredTitles!: Observable<string[]>;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.initDb();
    this.filteredTitles = this.query.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    );
  }

  initDb() {
    this.loader = true;
    this.http
      .get<AnimeQuote[]>('assets/data/animequotes.json')
      .subscribe((res) => {
        this.quotesDb = res;
        this.random();
        this.getTitles();
        this.loader = false;
      });
  }

  random() {
    this.showTitles = false;
    this.results = Utils.shuffleArray(this.quotesDb)
      .slice(0, 50)
      .sort((a, b) => a.ID - b.ID);
  }

  getTitles() {
    this.titles = Utils.uniqueArray(
      this.quotesDb.map((res) => {
        return res.anime;
      })
    ).sort();
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.titles.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }

  filterAnime(title: string) {
    this.showTitles = false;
    this.results = this.quotesDb
      .filter((res) => res.anime == title)
      .sort((a, b) => a.ID - b.ID);
  }
}
