import { Component, OnInit } from '@angular/core';
import { leaderclass } from '../shared/leaderclass';
import { LeaderService } from '../services/leader.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  leader: leaderclass[];

  constructor(private leaderservice: LeaderService) { }

  ngOnInit() {
    this.leader= this.leaderservice.getLeader();
  }

}
