import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  titles = ['Calculator', "Weather App", "News", "Movie", "Anime", "Manga", "Quote", "Invoice Gen", "Resume Builder"]

  constructor() { }

  ngOnInit(): void {
  }

}
