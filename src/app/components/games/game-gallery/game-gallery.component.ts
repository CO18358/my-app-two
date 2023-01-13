import { Component, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { Router } from '@angular/router';
import { GENRES, PLATFORMS, SORT_ORDERS } from 'src/app/helpers/games';
import { GameDetails } from 'src/app/helpers/interfaces';
import { GamesService } from 'src/app/services/games/games.service';

@Component({
  selector: 'app-game-gallery',
  templateUrl: './game-gallery.component.html',
  styleUrls: ['./game-gallery.component.scss'],
})
export class GameGalleryComponent implements OnInit {
  showLoader!: boolean;
  games!: GameDetails[];
  filteredGames!: GameDetails[];

  genres = GENRES;
  orders = SORT_ORDERS;
  platforms = PLATFORMS;

  constructor(private gamesService: GamesService, private router: Router) {}

  ngOnInit(): void {
    this.getGames();
  }
  getGames() {
    this.showLoader = true;
    this.gamesService.allGames().subscribe((res) => {
      this.games = res;
      this.filteredGames = res;
      this.showLoader = false;
    });
  }

  review(id: number) {
    this.router.navigate(['/games', id]);
  }

  filterByTag(event: MatSelectChange) {
    if (event.value == '') {
      this.filteredGames = this.games;
    } else {
      this.showLoader = true;
      this.gamesService.genre(event.value).subscribe((res) => {
        this.filteredGames = res;
        this.showLoader = false;
      });
    }
  }

  filterByPlatform(event: MatSelectChange) {
    if (event.value == '') {
      this.filteredGames = this.games;
    } else {
      this.showLoader = true;
      this.gamesService.platform(event.value).subscribe((res) => {
        this.filteredGames = res;
        this.showLoader = false;
      });
    }
  }

  sort(event: MatSelectChange) {
    this.showLoader = true;
    this.gamesService.sort(event.value).subscribe((res) => {
      this.filteredGames = res;
      this.showLoader = false;
    });
  }
}
