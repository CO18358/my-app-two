import { Component, OnInit } from '@angular/core';
import { AnimeQuote } from 'src/app/helpers/interfaces';
import { AnimeQuotesService } from 'src/app/services/anime-quotes/anime-quotes.service';

@Component({
  selector: 'app-anime-quote',
  templateUrl: './anime-quote.component.html',
  styleUrls: ['./anime-quote.component.scss'],
})
export class AnimeQuoteComponent implements OnInit {
  options = [
    { name: 'Anime', value: true },
    { name: 'Character', value: false },
  ];
  option = this.options[0];
  query!: string;

  pageNum: number = 1;

  loader!: boolean;
  quotesArray!: AnimeQuote[];
  news!: any[];
  index = 0;

  constructor(private quoteService: AnimeQuotesService) {}

  ngOnInit() {
    this.random();
    this.newsToday();
  }

  // async getAnimeList() {
  //   const titles = await lastValueFrom(this.quoteService.animeListUrl());
  // }

  newsToday() {
    this.loader = true;
    this.quoteService.news().subscribe((res) => {
      this.news = res;
      this.loader = false;
    });
  }
  random() {
    this.quoteService.randomQoutes(this.pageNum).subscribe((res) => {
      this.quotesArray = res;
    });
  }

  search() {
    if (this.query && this.query != '') {
      this.loader = true;
      this.quoteService
        .search(this.option.value, this.query, this.pageNum)
        .subscribe((res) => {
          this.quotesArray = res;
          this.loader = false;
        });
    }
  }

  prevPage() {
    this.pageNum > 0 && this.pageNum--;
    if (
      this.query &&
      this.query != '' &&
      (this.quotesArray[0].anime.includes(this.query) ||
        this.quotesArray[0].character.includes(this.query))
    ) {
      this.search();
    } else this.random();
  }

  nextPage() {
    this.pageNum++;
    if (
      this.query &&
      this.query != '' &&
      (this.quotesArray[0].anime.includes(this.query) ||
        this.quotesArray[0].character.includes(this.query))
    ) {
      this.search();
    } else this.random();
  }
}
