import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import {
  GameDetails,
  GENRES,
  PLATFORMS,
  SORT_ORDERS,
} from 'src/app/helpers/games';
import { GamesService } from 'src/app/services/games/games.service';

@Component({
  selector: 'app-game-gallery',
  templateUrl: './game-gallery.component.html',
  styleUrls: ['./game-gallery.component.scss'],
})
export class GameGalleryComponent implements OnInit {
  showLoader!: boolean;
  games!: GameDetails[];

  genres = GENRES;
  orders = SORT_ORDERS;
  platforms = PLATFORMS;

  platform = this.platforms[0];
  genre = this.genres[0];
  sort_by = this.orders[0];

  constructor(private gamesService: GamesService, private router: Router) {}

  ngOnInit(): void {
    this.getGames();
  }
  getGames() {
    this.showLoader = true;
    this.gamesService.allGames().subscribe((res) => {
      this.games = res;
      this.showLoader = false;
    });
  }

  review(id: number) {
    this.router.navigate(['/games', id]);
  }
  filter() {}
}
