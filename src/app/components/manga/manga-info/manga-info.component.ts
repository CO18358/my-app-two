import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom, Subscription } from 'rxjs';
import {
  ItemType,
  MangaInfo,
  Recommendation,
} from 'src/app/helpers/jikan.interfaces';
import { MangaService } from 'src/app/services/manga/manga.service';

@Component({
  selector: 'app-manga-info',
  templateUrl: './manga-info.component.html',
  styleUrls: ['./manga-info.component.scss'],
})
export class MangaInfoComponent implements OnInit {
  loader!: boolean;
  title!: string;
  result!: MangaInfo;
  currentRoute!: string;
  genres!: ItemType[];
  recommendations!: Recommendation[];
  private manga$!: Subscription;
  constructor(
    private manga: MangaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((res) => {
      this.getManga(res['id']);
    });
  }

  async getManga(id: number) {
    this.loader = true;
    this.recommendations = await lastValueFrom(
      this.manga.mangaRecommendations(id)
    );
    this.manga$ = this.manga.mangaDetails(id).subscribe({
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
      },
    });
  }

  genre(id: number) {
    this.router.navigate(['/manga/results'], { queryParams: { genres: id } });
  }

  magazine(id: number) {
    this.router.navigate(['/manga/results'], {
      queryParams: { magazines: id },
    });
  }

  ngOnDestroy() {
    this.manga$.unsubscribe();
  }
}
