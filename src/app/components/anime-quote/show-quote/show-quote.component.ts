import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AnimeQuote } from 'src/app/models/interfaces';

@Component({
  selector: 'app-show-quote',
  templateUrl: './show-quote.component.html',
  styleUrls: ['./show-quote.component.scss']
})
export class ShowQuoteComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: AnimeQuote ) { }

  ngOnInit(): void {
  }

}
