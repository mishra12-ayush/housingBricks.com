import { Component, OnInit } from '@angular/core';
import {propertyclass} from '../shared/propertyclass';
import {PropertyService} from '../services/property.service';
import { flyInOut } from '../animations/app.animation';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.scss'],
  host: {
  '[@flyInOut]': 'true',
  'style': 'display: block;'
  },
  animations: [
    flyInOut()
  ]
})
export class DealsComponent implements OnInit {

  property: propertyclass[];

  constructor(private propertyservice: PropertyService) { }

  ngOnInit() {
    this.property = this.propertyservice.getProperty();
  }

}
