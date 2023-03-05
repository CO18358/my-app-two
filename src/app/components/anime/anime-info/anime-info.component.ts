import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, lastValueFrom } from 'rxjs';
import {
  AnimeInfo,
  ItemType,
  Recommendation,
} from 'src/app/helpers/jikan.interfaces';
import { AnimeService } from 'src/app/services/anime/anime.service';

@Component({
  selector: 'app-anime-info',
  templateUrl: './anime-info.component.html',
  styleUrls: ['./anime-info.component.scss'],
})
export class AnimeInfoComponent implements OnInit {
  loader!: boolean;
  title!: string;
  result!: AnimeInfo;
  currentRoute!: string;
  genres!: ItemType[];
  producers!: ItemType[];
  recommendations!: Recommendation[];
  private anime$!: Subscription;

  constructor(
    private anime: AnimeService,
    private route: ActivatedRoute,
    private router: Router,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.route.params.subscribe((res) => {
      this.getAnime(res['id']);
    });
  }

  getAnime(id: number) {
    this.loader = true;
    this.anime$ = this.anime.animeDetails(id).subscribe({
      next: (res) => {
        this.result = res;
        this.title = res.title;
        this.loader = false;
        this.genres = [
          ...this.result.genres,
          ...this.result.explicit_genres,
          ...this.result.demographics,
          ...this.result.themes,
        ];
        this.producers = [
          ...this.result.producers,
          ...this.result.licensors,
          ...this.result.studios,
        ];
        console.log(this.result);
      },
    });
    this.anime.animeRecommendations(id).subscribe((res) => {
      this.recommendations = res;
    });
  }

  genre(id: number) {
    this.router.navigate(['/anime/results'], { queryParams: { genres: id } });
  }

  producer(id: number) {
    this.router.navigate(['/anime/results'], {
      queryParams: { producers: id },
    });
  }

  safe(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  ngOnDestroy() {
    this.anime$.unsubscribe();
  }
}
