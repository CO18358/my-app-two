import { Component, OnInit } from '@angular/core';
import { AnimeQuote } from 'src/app/helpers/interfaces';
import { AnimeQuotesService } from 'src/app/services/anime-quotes/anime-quotes.service';

@Component({
  selector: 'app-anime-quote',
  templateUrl: './anime-quote.component.html',
  styleUrls: ['./anime-quote.component.scss'],
})
export class AnimeQuoteComponent implements OnInit {
  query!: string;
  loader!: boolean;
  results!: AnimeQuote[];

  constructor(private quoteService: AnimeQuotesService) {}

  ngOnInit() {
    this.random();
  }

  // async getAnimeList() {
  //   const titles = await lastValueFrom(this.quoteService.animeListUrl());
  // }

  random() {
    this.loader = true;
    this.quoteService.random().subscribe((res) => {
      this.results = res;
      this.loader = false;
    });
  }

  character(name: string) {
    this.loader = true;
    this.quoteService.byCharacter(name).subscribe((res) => {
      this.results = res;
      this.loader = false;
    });
  }

  anime(title: string) {
    this.loader = true;
    this.quoteService.byAnime(title).subscribe((res) => {
      this.results = res;
      this.loader = false;
    });
  }
}
