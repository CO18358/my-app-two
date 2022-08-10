import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { lastValueFrom, Observable } from 'rxjs';
import { AnimeQuote } from 'src/app/models/interfaces';
import { AnimeQuotesService } from 'src/app/services/anime-quotes/anime-quotes.service';
import { ShowQuoteComponent } from './show-quote/show-quote.component';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-anime-quote',
  templateUrl: './anime-quote.component.html',
  styleUrls: ['./anime-quote.component.scss']
})
export class AnimeQuoteComponent implements OnInit {

  titles: string[] = [];
  form = new FormControl();
  filteredTitles!: Observable<string[]>

  constructor(
    private quoteService: AnimeQuotesService,
    public dialog: MatDialog
  ) { }

  async ngOnInit() {
    await this.getAnimeList();
    this.filteredTitles = this.form.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  async getAnimeList() {
    const titles = await lastValueFrom(this.quoteService.animeListUrl())
    this.titles = titles.sort().filter((title: string) => title);
    this.titles.unshift("Random")
  }

  async showQuote(name: string) {
    let request = this.quoteService.animeQuotesUrl(name)
    if (name == "Random") {
      request = this.quoteService.randomQoutesUrl()
    }
    const quotes: AnimeQuote[] = await lastValueFrom(request)
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    this.dialog.open(ShowQuoteComponent, {
      data: quote,
      maxHeight: "75vh"
    })
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.titles.filter(option => option.toLowerCase().includes(filterValue));
  }

}
