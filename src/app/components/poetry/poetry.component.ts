import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Poem } from 'src/app/helpers/interfaces';
import { PoetryService } from 'src/app/services/poetry/poetry.service';

@Component({
  selector: 'app-poetry',
  templateUrl: './poetry.component.html',
  styleUrls: ['./poetry.component.scss'],
})
export class PoetryComponent implements OnInit {
  authors!: string[];
  titles!: any[];

  poem!: Poem;
  poems!: Poem[];

  spinner!: boolean;
  poemSpinner!: boolean;

  constructor(private poetryService: PoetryService) {}

  ngOnInit(): void {
    this.initiate();
  }

  async initiate() {
    this.spinner = true;
    this.poem = await lastValueFrom(this.poetryService.getRandomPoem());
    this.authors = await lastValueFrom(this.poetryService.getPoets());
    this.titles = await lastValueFrom(
      this.poetryService.getPoembyPoets(this.poem.author)
    );
    this.spinner = false;
  }

  async poemsByPoet(poet: string) {
    this.poemSpinner = true;
    this.poem = await lastValueFrom(
      this.poetryService.getRandomPoemByPoet(poet)
    );
    this.titles = await lastValueFrom(this.poetryService.getPoembyPoets(poet));
    this.poemSpinner = false;
  }
}
