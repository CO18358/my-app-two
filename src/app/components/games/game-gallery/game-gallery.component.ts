import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { map, Observable, startWith } from 'rxjs';
import { GAME_TAGS } from 'src/app/helpers/games';
import { GameDetails } from 'src/app/helpers/interfaces';
import { GamesService } from 'src/app/services/games/games.service';

@Component({
  selector: 'app-game-gallery',
  templateUrl: './game-gallery.component.html',
  styleUrls: ['./game-gallery.component.scss'],
})
export class GameGalleryComponent implements OnInit {
  showLoader!: boolean;
  tags = GAME_TAGS;
  games!: GameDetails[];

  search = new FormControl();
  filteredGames!: Observable<GameDetails[]>;
  constructor(private gamesService: GamesService, private router: Router) {}

  ngOnInit(): void {
    this.getGames();
    this.filteredGames = this.search.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    );
  }
  getGames() {
    this.showLoader = true;
    this.gamesService.getAllGames().subscribe((res) => {
      this.games = res;
      console.log(this.games);
      this.showLoader = false;
    });
  }

  private _filter(value: string): GameDetails[] {
    const filterValue = value.toLowerCase();

    return this.games.filter((game) =>
      game.title.toLowerCase().includes(filterValue)
    );
  }

  review(id: number) {
    this.router.navigate(['/games', id]);
  }
}
