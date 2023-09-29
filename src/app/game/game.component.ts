import { Component } from '@angular/core';
import { Game } from './game';
import { GameService } from './game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {
  boardGames: Game[] = [];

  constructor(private boardGameService: GameService) {
  }

  ngOnInit(): void {
    this.boardGameService.getBoardGames().subscribe((games: Game[]) => {
      this.boardGames = games;
    });
  }
}
