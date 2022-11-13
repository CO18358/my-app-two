import { Component, OnInit } from '@angular/core';
import { GAMES_SORT_BY, GAME_PLATFORM, GAME_TAGS } from 'src/app/helpers/games';
import { GameDetails } from 'src/app/helpers/interfaces';
import { GamesService } from 'src/app/services/games/games.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
})
export class GamesComponent implements OnInit {
  showLoader!: boolean;
  tags = GAME_TAGS;
  platforms = GAME_PLATFORM;
  sort = GAMES_SORT_BY;

  games!: GameDetails[];
  constructor(private gamesService: GamesService) {}

  ngOnInit(): void {
    this.getGames();
  }

  getGames() {
    this.showLoader = true;
    this.gamesService.getAllGames().subscribe((res) => {
      this.games = res;
      console.log(this.games);
      this.showLoader = false;
    });
  }
}
