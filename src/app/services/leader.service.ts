import { Injectable } from '@angular/core';
import { leaderclass } from '../shared/leaderclass';
import { leaderconst } from '../shared/leaderconst';
import { Observable ,of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeader(): Observable<leaderclass[]> {
    return of(leaderconst).pipe(delay(2000));
  }
}
