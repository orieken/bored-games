import { of } from 'rxjs';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GameComponent } from './game.component';
import { GameService } from './game.service';
import { Game } from './game';

fdescribe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;
  let boardGameService: jasmine.SpyObj<GameService>;

  beforeEach(() => {
    // Create a spy object for the BoardGameService
    const boardGameServiceSpy = jasmine.createSpyObj('BoardGameService', ['getBoardGames']);

    TestBed.configureTestingModule({
      declarations: [GameComponent],
      providers: [
        { provide: GameService, useValue: boardGameServiceSpy }, // Provide the spy object
      ],
    });

    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
    boardGameService = TestBed.inject(GameService) as jasmine.SpyObj<GameService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display "No games" when there are no games', () => {
    // Mock the getBoardGames method to return an empty array
    boardGameService.getBoardGames.and.returnValue(of([]));

    // Trigger the ngOnInit lifecycle hook to fetch data
    component.ngOnInit();
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Board Games');
    expect(compiled.querySelector('p').textContent).toContain('No board games found.');
  });

  it('should display a list of games', () => {
    const mockedGames: Game[] = [
      {
        id: 1,
        name: 'Settlers of Catan',
        min_players: 3,
        max_players: 4,
        avg_game_time: '90 minutes',
        barcode: '1234567890',
      },
      {
        id: 2,
        name: 'Ticket to Rides',
        min_players: 2,
        max_players: 5,
        avg_game_time: '60 minutes',
        barcode: '1234567891',
      },
    ];
    // Mock the getBoardGames method to return an array of games
    boardGameService.getBoardGames.and.returnValue(of(mockedGames));

    // Trigger the ngOnInit lifecycle hook to fetch data
    component.ngOnInit();
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Board Games');

    const games = compiled.querySelectorAll('li');
    expect(games.length).toBe(2);
    games.forEach((game: any, index: number) => {
      expect(game.textContent).toContain(mockedGames[index].name);
    });
  });
});
