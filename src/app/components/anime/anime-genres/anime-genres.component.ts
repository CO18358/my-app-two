import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ItemCount } from 'src/app/helpers/jikan.interfaces';
import { AnimeService } from 'src/app/services/anime/anime.service';

@Component({
  selector: 'app-anime-genres',
  templateUrl: './anime-genres.component.html',
  styleUrls: ['./anime-genres.component.scss'],
})
export class AnimeGenresComponent implements OnInit, OnDestroy {
  loader!: boolean;
  results!: ItemCount[];
  title!: string;
  private list$!: Subscription;

  constructor(private anime: AnimeService, private router: Router) {}

  ngOnInit(): void {
    this.loader = true;
    this.list$ = this.anime.genres().subscribe({
      next: (res) => {
        this.results = res.sort();
        this.title = `Genres (${res.length})`;
        this.loader = false;
      },
    });
  }

  viewAnime(id: number) {
    this.router.navigate(['/anime/results'], { queryParams: { genres: id } });
  }

  ngOnDestroy() {
    this.list$.unsubscribe();
  }
}
