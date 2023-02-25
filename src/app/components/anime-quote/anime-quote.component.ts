import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith, Subscription } from 'rxjs';
import { AnimeQuote } from 'src/app/helpers/interfaces';
import { Utils } from 'src/app/helpers/utilties';
import { QuotesService } from 'src/app/services/quotes/quotes.service';

enum View {
  Quotes = 'quotes',
  Titles = 'titles',
  Characters = 'characters',
}

@Component({
  selector: 'app-anime-quote',
  templateUrl: './anime-quote.component.html',
  styleUrls: ['./anime-quote.component.scss'],
})
export class AnimeQuoteComponent implements OnInit, OnDestroy {
  loader!: boolean;
  results!: AnimeQuote[];

  views = View;
  view!: string;

  query = new FormControl('');
  titles!: string[];
  filteredTitles!: Observable<string[]>;

  isMobile = Utils.isMobile();
  private quote$!: Subscription;

  constructor(private quotes: QuotesService, private location: Location) {}

  ngOnDestroy(): void {
    this.quote$.unsubscribe();
  }
  home() {
    this.location.back();
  }

  ngOnInit() {
    this.random();
    this.filteredTitles = this.query.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || '', this.titles))
    );
  }

  random() {
    this.loader = true;
    this.quote$ = this.quotes.random().subscribe((res) => {
      this.results = res;
      this.view = this.views.Quotes;
      this.loader = false;
    });
  }

  getTitles() {
    this.loader = true;
    this.quote$ = this.quotes.titles().subscribe((res) => {
      this.titles = res.sort();
      this.view = this.views.Titles;
      this.loader = false;
    });
  }

  getCharacters() {
    this.loader = true;
    this.quote$ = this.quotes.characters().subscribe((res) => {
      this.titles = res.sort();
      this.view = this.views.Characters;
      this.loader = false;
    });
  }

  getTitleQuotes(title: string, page?: number) {
    this.loader = true;
    this.quote$ = this.quotes.animeQuotes(title, page).subscribe((res) => {
      this.results = res.sort();
      this.view = this.views.Quotes;
      this.loader = false;
    });
  }

  getCharQuotes(name: string, page?: number) {
    this.loader = true;
    this.quote$ = this.quotes.characterQuotes(name, page).subscribe((res) => {
      this.results = res.sort();
      this.view = this.views.Quotes;
      this.loader = false;
    });
  }

  private _filter(value: string, array: string[]): string[] {
    const filterValue = value.toLowerCase();

    return array.filter((option) => option.toLowerCase().includes(filterValue));
  }
}
