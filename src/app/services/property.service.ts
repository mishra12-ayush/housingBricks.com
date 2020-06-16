import { Injectable } from '@angular/core';
import {propertyclass} from '../shared/propertyclass';
import {propertyconst} from '../shared/propertyconst';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor() { }

  getProperty(): propertyclass[] {
    return propertyconst;
  }
}
