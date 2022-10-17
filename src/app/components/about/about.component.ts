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
    { title: 'World News', url: '/news', image: '/assets/thumbnails/news.png' },
    {
      title: 'Invoice Generator',
      url: '/invoice',
      image: '/assets/thumbnails/invoice.png',
    },
    {
      title: 'IP Lookup',
      url: '/link-preview',
      image: '/assets/thumbnails/ip-search.png',
    },
    {
      title: 'Watch a Movie',
      url: '/movie-db',
      image: '/assets/thumbnails/movie.png',
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
      title: 'Cryptocurrency Tracker',
      url: '/crypto',
      image: '/assets/thumbnails/crypto.png',
    },
    {
      title: 'Minified Cookbook',
      url: '/cookbook',
      image: '/assets/thumbnails/cookbook.png',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
