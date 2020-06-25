import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../services/property.service';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {propertyclass} from '../shared/propertyclass';

@Component({
  selector: 'app-propertydetail',
  templateUrl: './propertydetail.component.html',
  styleUrls: ['./propertydetail.component.scss']
})
export class PropertydetailComponent implements OnInit {

  property: propertyclass;

  constructor(private propertyservice: PropertyService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    const id= this.route.snapshot.params['id'];
    this.propertyservice.getAProperty(id).subscribe((property) => this.property= property);
  }

  goBack(): void {
    this.location.back();
  }

}
