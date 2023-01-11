import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameDetailsExtended } from 'src/app/helpers/games';
import { GamesService } from 'src/app/services/games/games.service';

@Component({
  selector: 'app-game-review',
  templateUrl: './game-review.component.html',
  styleUrls: ['./game-review.component.scss'],
})
export class GameReviewComponent implements OnInit {
  showLoader!: boolean;
  gameDetails!: GameDetailsExtended;
  constructor(
    private gamesService: GamesService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    const id = this.route.snapshot.paramMap.get('gameId');
    id ? this.getGame(parseInt(id)) : this.router.navigate(['/games/gallery']);
  }

  ngOnInit(): void {}

  getGame(id: number) {
    this.showLoader = true;
    this.gamesService.getGameById(id).subscribe((res) => {
      this.gameDetails = res;
      this.showLoader = false;
    });
  }

  nav(url: string) {
    window.open(url, '_blank');
  }
}
