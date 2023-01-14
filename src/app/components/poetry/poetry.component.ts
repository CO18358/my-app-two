import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { Poem } from 'src/app/helpers/interfaces';
import { PoetryService } from 'src/app/services/poetry/poetry.service';
import { Utils } from 'src/app/shared/utilties';

@Component({
  selector: 'app-poetry',
  templateUrl: './poetry.component.html',
  styleUrls: ['./poetry.component.scss'],
})
export class PoetryComponent implements OnInit {
  authors!: string[];
  poems!: Poem[];
  poem!: Poem;
  poet!: string;

  spinner!: boolean;
  isMobile = Utils.isMobile();
  showPoets!: boolean;
  @ViewChild('drawer') drawer!: MatSidenav;
  constructor(private poetryService: PoetryService, private router: Router) {}

  ngOnInit(): void {
    this.random();
    this.poetryService.getPoets().subscribe((res) => {
      this.authors = res;
    });
  }

  home() {
    this.router.navigate(['/about']);
  }

  random() {
    this.spinner = true;
    this.poetryService.getRandomPoem().subscribe((res) => {
      this.poem = res;
      this.poet = res.author;
      this.poemsByPoet(this.poet);
      this.spinner = false;
    });
  }

  async poemsByPoet(poet: string) {
    this.poems = await lastValueFrom(this.poetryService.getPoembyPoets(poet));
    this.showPoets = false;
    console.log(this.poems);
  }

  getPoem(title: string) {
    this.showPoets = false;
    this.drawer.close();
    this.spinner = true;
    this.poetryService.getPoem(title).subscribe((res) => {
      this.poem = res;
      this.poet = res.author;
      this.spinner = false;
    });
  }

  toggleDrawer() {
    this.showPoets = true;
    this.drawer.toggle();
  }
}
