import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  apps = [
    {
      title: 'Anime Quotes',
      url: '/quotes',
      image: '/assets/thumbnails/anime-quote.png',
    },
    {
      title: 'Video Games',
      url: '/games',
      image: '/assets/thumbnails/games.png',
    },
    {
      title: 'Manga Catalogue',
      url: '/manga',
      image: '/assets/thumbnails/manga.png',
    },
    {
      title: 'Cryptocurrency Tracker Realtime Wea',
      url: '/crypto',
      image: '/assets/thumbnails/crypto.png',
    },
    {
      title: 'Trivia',
      url: '/trivia',
      image: '/assets/thumbnails/trivia.png',
    },
    {
      title: 'Fitness Calculator',
      url: '/fitness',
      image: '/assets/thumbnails/fitness.png',
    },
    {
      title: 'Realtime Weather',
      url: '/weather',
      image: '/assets/thumbnails/weather.png',
    },
    {
      title: 'Horoscope',
      url: '/horoscope',
      image: '/assets/thumbnails/horoscope.png',
    },

    {
      title: 'Cookbook',
      url: '/cookbook',
      image: '/assets/thumbnails/cookbook.png',
    },
    {
      title: 'Make a Cocktail',
      url: '/cocktail',
      image: '/assets/thumbnails/cocktail.png',
    },
    {
      title: 'Poetry',
      url: '/poetry',
      image: '/assets/thumbnails/poetry.png',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
