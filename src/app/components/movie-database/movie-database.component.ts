import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { OmdbService } from 'src/app/services/omdb/omdb.service';

@Component({
  selector: 'app-movie-database',
  templateUrl: './movie-database.component.html',
  styleUrls: ['./movie-database.component.scss'],
})
export class MovieDatabaseComponent implements OnInit {
  query!: string;
  pageQuery!: string;
  result!: any[];
  show!: any;
  showHome: boolean = true;
  pages!: number;
  current = 1;

  constructor(
    private omdbService: OmdbService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.query = 'Avengers';
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

  lookup(id: string) {
    this.omdbService.findById(id).subscribe({
      next: (value) => {
        this.show = value;
        this.showHome = false;
      },
      error: (e) => console.log(e),
    });
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

  rating(value: string, imdb: boolean = false) {
    return imdb ? parseFloat(value) * 10 : parseFloat(value);
  }

  return() {
    this.showHome = true;
  }
}
