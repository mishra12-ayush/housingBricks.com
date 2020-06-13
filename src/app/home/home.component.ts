import { Component, OnInit } from '@angular/core';
import {landingclass} from '../shared/landingclass';
import {LandingService} from '../services/landing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  landing : landingclass[];

  constructor(private landingService : LandingService) { }

  ngOnInit() {
    this.landing= this.landingService.getLanding();
  }

}
