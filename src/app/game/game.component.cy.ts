import { GameComponent } from './game.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { GameService } from './game.service';
import { of } from 'rxjs';

describe('GameComponent', () => {
  describe('No Games', () => {
    it('should show no games message', () => {
      cy.intercept('GET', '**/api/board-games', {
        statusCode: 200,
        body: [],
      });

      cy.mount(GameComponent, {
        imports: [HttpClientModule],
        declarations: [GameComponent],
        providers: [GameService],
        componentProperties: {}
      });

      cy.get('h1').should('contain', 'Board Games');
      cy.get('[data-cy=no-games-message]').should('have.text', 'No board games found.');
    });
  });

  describe('with games', () => {
    it('should have 2 games', () => {
      cy.intercept('GET', '**/api/board-games', {
        statusCode: 200,
        body: [
          {
            id: 1,
            name: 'Game 1',
            min_players: 1,
            max_players: 2,
            avg_game_time: '30 minutes',
            barcode: '1234567890',
          },
          {
            id: 2,
            name: 'Game 2',
            min_players: 2,
            max_players: 4,
            avg_game_time: '45 minutes',
            barcode: '1234567890',
          },
        ]
      });

      cy.mount(GameComponent, {
        imports: [HttpClientModule],
        declarations: [GameComponent],
        providers: [
          GameService,
        ],
      });

      cy.get('h1').should('contain', 'Board Games');
      cy.get('[data-cy=board-game-1] h2').should('have.text', 'Game 1');
      cy.get('[data-cy=board-game-2] h2').should('have.text', 'Game 2');
    });
  });
});
