import { Injectable } from '@angular/core';
import {propertyclass} from '../shared/propertyclass';
import {propertyconst} from '../shared/propertyconst';
import { Observable ,of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor() { }

  getProperty(): Observable<propertyclass[]> {
    return of(propertyconst).pipe(delay(2000));
  }

  getAProperty(id: string): Observable<propertyclass> {
    return of(propertyconst.filter((prop) => (prop.id === id))[0]).pipe(delay(2000));
  }
}
