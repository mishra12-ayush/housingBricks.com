import { Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactusComponent } from '../contactus/contactus.component';
import { DealsComponent } from '../deals/deals.component';
import { PropertydetailComponent } from '../propertydetail/propertydetail.component';

export const routes: Routes =[
  { path: 'home',  component: HomeComponent },
  { path: 'about',  component: AboutComponent },
  { path: 'deals',  component: DealsComponent },
  { path: 'contactus',  component: ContactusComponent },
  { path: 'propertydetail/:id', component: PropertydetailComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
]
