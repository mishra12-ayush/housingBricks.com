import { Component, OnInit } from '@angular/core';
import {landingclass} from '../shared/landingclass';
import {LandingService} from '../services/landing.service';
import { flyInOut } from '../animations/app.animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: {
  '[@flyInOut]': 'true',
  'style': 'display: block;'
  },
  animations: [
    flyInOut()
  ]
})
export class HomeComponent implements OnInit {

  landing : landingclass[];

  constructor(private landingService : LandingService) { }

  ngOnInit() {
    this.landing= this.landingService.getLanding();
  }

}
