import { Component, OnInit } from '@angular/core';
import {
  MangaShort,
  PaginatedResponse,
} from 'src/app/helpers/jikan.interfaces';
import { Utils } from 'src/app/helpers/utilties';
import { MangaService } from 'src/app/services/manga/manga.service';

@Component({
  selector: 'app-manga-top',
  templateUrl: './manga-top.component.html',
  styleUrls: ['./manga-top.component.scss'],
})
export class MangaTopComponent implements OnInit {
  loader!: boolean;
  title!: string;
  results!: MangaShort[];

  showPagination = false;
  current!: number;
  last!: number;
  pageNumbers?: number[];
  constructor(private manga: MangaService) {}

  ngOnInit(): void {
    this.getTopManga();
  }

  getTopManga(params?: any) {
    this.loader = true;
    this.manga.topManga(params).subscribe({
      next: (res) => {
        this.setValues(res);
        this.title = `Top (${res.pagination.items.total})`;
      },
    });
  }

  private setValues(res: {
    pagination: PaginatedResponse;
    data: MangaShort[];
  }) {
    this.results = res.data;
    this.showPagination = !(
      !res.pagination.has_next_page && res.pagination.current_page == 1
    );
    if (this.showPagination) {
      this.current = res.pagination.current_page;
      this.last = res.pagination.last_visible_page;
      this.pageNumbers = Utils.paginationNumbers(this.last, this.current);
    }
    this.loader = false;
  }
}
