import { Injectable } from '@angular/core';
import { leaderclass } from '../shared/leaderclass';
import { leaderconst } from '../shared/leaderconst';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeader(): leaderclass[] {
    return leaderconst;
  }
}
