import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Producer } from 'src/app/helpers/jikan.interfaces';
import { Utils } from 'src/app/helpers/utilties';
import { AnimeService } from 'src/app/services/anime/anime.service';

@Component({
  selector: 'app-anime-producers',
  templateUrl: './anime-producers.component.html',
  styleUrls: ['./anime-producers.component.scss'],
})
export class AnimeProducersComponent implements OnInit, OnDestroy {
  loader!: boolean;
  results!: Producer[];
  title!: string;
  private list$!: Subscription;

  showPagination = false;
  current!: number;
  last!: number;
  pageNumbers?: number[];
  constructor(private anime: AnimeService, private router: Router) {}

  ngOnInit(): void {
    this.getAnime();
  }

  getAnime(page?: number) {
    this.loader = true;
    this.list$ = this.anime.producers(page).subscribe({
      next: (res) => {
        this.results = res.data.sort();
        this.title = `Producers (${res.pagination.items.total})`;
        this.showPagination =
          res.pagination.has_next_page || res.pagination.current_page !== 1;
        if (this.showPagination) {
          this.current = res.pagination.current_page;
          this.last = res.pagination.last_visible_page;
          this.pageNumbers = Utils.paginationNumbers(this.last, this.current);
        }
        this.loader = false;
        console.log(this.results);
      },
    });
  }

  viewAnime(id: number) {
    this.router.navigate(['/anime/results'], {
      queryParams: { producers: id },
    });
  }

  ngOnDestroy() {
    this.list$.unsubscribe();
  }
}
