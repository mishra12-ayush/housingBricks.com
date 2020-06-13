import { Injectable } from '@angular/core';
import { landingclass } from '../shared/landingclass';
import { landingconst } from '../shared/landingconst';

@Injectable({
  providedIn: 'root'
})
export class LandingService {

  constructor() { }
  getLanding(): landingclass[]{
    return landingconst;
}
}
