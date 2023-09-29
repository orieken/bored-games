import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Game } from './game';
import { MOCK_GAMES } from './mock-games';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient) {
  }

  getBoardGames(): Observable<Game[]> {
    return this.http.get<Game[]>('/api/board-games'); // this line on for tests
    // return of(MOCK_GAMES); // this line on for running the server and getting games
  }
}
