import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OmdbService } from 'src/app/services/omdb/omdb.service';

@Component({
  selector: 'app-movie-review',
  templateUrl: './movie-review.component.html',
  styleUrls: ['./movie-review.component.scss'],
})
export class MovieReviewComponent implements OnInit {
  show!: any;

  constructor(
    private omdbService: OmdbService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    const id = this.route.snapshot.paramMap.get('movieId');
    id ? this.lookup(id) : this.router.navigate(['/movie-db/gallery']);
  }

  ngOnInit(): void {}

  lookup(id: string) {
    this.omdbService.findById(id).subscribe({
      next: (value) => {
        this.show = value;
      },
    });
  }

  rating(value: string, imdb: boolean = false) {
    return imdb ? parseFloat(value) * 10 : parseFloat(value);
  }
}
