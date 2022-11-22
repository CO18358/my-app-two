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
      url: '/anime-quote',
      image: '/assets/thumbnails/anime-quote.png',
    },
    {
      title: 'Video Games',
      url: '/games',
      image: '/assets/thumbnails/games.png',
    },
    {
      title: 'Invoice Generator',
      url: '/invoice',
      image: '/assets/thumbnails/invoice.png',
    },
    {
      title: 'Cryptocurrency Tracker',
      url: '/crypto',
      image: '/assets/thumbnails/crypto.png',
    },
    {
      title: 'Realtime Weather',
      url: '/weather',
      image: '/assets/thumbnails/weather.png',
    },
    {
      title: 'Exercise Suggestions',
      url: '/exercises',
      image: '/assets/thumbnails/exercises.png',
    },
    {
      title: 'Fitness Calculator',
      url: '/fitness',
      image: '/assets/thumbnails/fitness.png',
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
      title: 'Cocktails',
      url: '/cocktail',
      image: '/assets/thumbnails/cocktail.png',
    },
    {
      title: 'Watch a Movie',
      url: '/movie-db',
      image: '/assets/thumbnails/movie.png',
    },
    {
      title: 'IP Lookup',
      url: '/link-preview',
      image: '/assets/thumbnails/ip-search.png',
    },
    {
      title: 'Poetry',
      url: '/poetry',
      image: '/assets/thumbnails/poetry.png',
    },
    { title: 'World News', url: '/news', image: '/assets/thumbnails/news.png' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
