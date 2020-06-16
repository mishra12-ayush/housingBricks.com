import { Component, OnInit } from '@angular/core';
import {propertyclass} from '../shared/propertyclass';
import {PropertyService} from '../services/property.service';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.scss']
})
export class DealsComponent implements OnInit {

  property: propertyclass[];

  constructor(private propertyservice: PropertyService) { }

  ngOnInit() {
    this.property = this.propertyservice.getProperty();
  }

}
