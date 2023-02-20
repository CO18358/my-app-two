import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { lastValueFrom, Subscription } from 'rxjs';
import { Poem } from 'src/app/helpers/interfaces';
import { PoetryService } from 'src/app/services/poetry/poetry.service';
import { Utils } from 'src/app/helpers/utilties';

@Component({
  selector: 'app-poetry',
  templateUrl: './poetry.component.html',
  styleUrls: ['./poetry.component.scss'],
})
export class PoetryComponent implements OnInit, OnDestroy {
  authors!: string[];
  poems!: Poem[];
  poem!: Poem;
  poet!: string;

  spinner!: boolean;
  isMobile = Utils.isMobile();
  showPoets!: boolean;
  @ViewChild('drawer') drawer!: MatSidenav;

  random$!: Subscription;
  poets$!: Subscription;
  poems$!: Subscription;
  poem$!: Subscription;
  constructor(private poetryService: PoetryService, private router: Router) {}

  ngOnInit(): void {
    this.random();
    this.poets$ = this.poetryService.getPoets().subscribe((res) => {
      this.authors = res;
    });
  }

  home() {
    this.router.navigate(['/dashboard']);
  }

  random() {
    this.spinner = true;
    this.random$ = this.poetryService.getRandomPoem().subscribe((res) => {
      this.poem = res;
      this.poet = res.author;
      this.poemsByPoet(this.poet);
      this.spinner = false;
    });
  }

  poemsByPoet(poet: string) {
    this.poems$ = this.poetryService.getPoembyPoets(poet).subscribe({
      next: (res) => {
        this.poems = res;
        this.showPoets = false;
      },
    });
  }

  getPoem(title: string) {
    this.showPoets = false;
    this.drawer.close();
    this.spinner = true;
    this.poem$ = this.poetryService.getPoem(title).subscribe((res) => {
      this.poem = res;
      this.poet = res.author;
      this.spinner = false;
    });
  }

  toggleDrawer() {
    this.showPoets = true;
    this.drawer.toggle();
  }

  ngOnDestroy(): void {
    this.random$.unsubscribe();
    this.poets$.unsubscribe();
    this.poem$.unsubscribe();
    this.poems$ && this.poems$.unsubscribe();
  }
}
