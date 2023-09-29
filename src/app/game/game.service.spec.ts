import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { GameService } from './game.service';
import { Game } from './game';

fdescribe('BoardGameService', () => {
  let service: GameService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GameService],
    });

    service = TestBed.inject(GameService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // After each test, verify that there are no outstanding HTTP requests.
    httpMock.verify();
  });

  it('should return a list of board games', () => {
    // Create mock data
    const mockBoardGames: Game[] = [
      {
        id: 1,
        name: 'Settlers of Catan',
        min_players: 3,
        max_players: 4,
        avg_game_time: '90 minutes',
        barcode: '1234567890',
      },
    ];

    // Make an HTTP request
    service.getBoardGames().subscribe((boardGames: Game[]) => {
      // When observable resolves, result should match test data
      expect(boardGames).toEqual(mockBoardGames);
    });

    // The following `expectOne()` will match the request's URL.
    const req = httpMock.expectOne('/api/board-games');
    // Assert that the request is a GET.
    expect(req.request.method).toBe('GET');

    // Respond with the mocked data
    req.flush(mockBoardGames);
  });
});
