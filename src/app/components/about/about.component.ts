import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  apps = [
    { title: 'Anime Quotes', url: '/anime-quote', image: '/assets/thumbnails/anime-quote.png' },
    { title: 'World News', url: '/news', image: '/assets/thumbnails/news.png' },
    { title: 'Invoice Generator', url: '/invoice', image: '/assets/thumbnails/invoice.png' },
    { title: 'Watch a Movie', url: '/movie-db', image: '/assets/thumbnails/movie.png' },
    { title: 'Horoscope', url: '/horoscope', image: '/assets/thumbnails/horoscope.png' },
    { title: 'IP Lookup', url: '/link-preview', image: '/assets/thumbnails/ip-search.png' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
