import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { OmdbService } from 'src/app/services/omdb/omdb.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  query!: string;
  pageQuery!: string;
  result!: any[];
  pages!: number;
  current = 1;
  constructor(
    private omdbService: OmdbService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.query = 'One Piece';
    this.search();
  }

  search() {
    if (this.query && this.query.length) {
      this.omdbService.search(this.query).subscribe((value: any) => {
        if (value.Response == 'True') {
          this.pageQuery = this.query;
          this.result = value.Search;
          this.current = 1;
          this.pages = Math.ceil(+value.totalResults / this.result.length);
        } else {
          this.toastr.error('No Results Found. Try Again');
        }
      });
    } else {
      this.toastr.error("Value can't be empty");
    }
  }

  next() {
    if (this.current < this.pages) {
      this.current++;
      this.omdbService
        .searchAnotherPage(this.pageQuery, this.current)
        .subscribe({
          next: (value: any) => {
            this.result = value.Search;
            this.pages = Math.ceil(+value.totalResults / this.result.length);
          },
          error: (e) => console.log(e),
        });
    }
  }

  previous() {
    if (this.current > 1) {
      this.current--;
      this.omdbService
        .searchAnotherPage(this.pageQuery, this.current)
        .subscribe({
          next: (value: any) => {
            this.result = value.Search;
            this.pages = Math.ceil(+value.totalResults / this.result.length);
          },
          error: (e) => console.log(e),
        });
    }
  }

  lookup(id: string) {
    this.router.navigate(['/movie-db/review', id]);
  }
}
