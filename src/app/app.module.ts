import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { BidingsComponent } from './examples/bindings.component';
import { EventsComponent } from './examples/events.component';
import { ConditionsComponent } from './examples/conditions.component';
import { HeaderComponent } from './layout/header.component';
import { HomeComponent } from './layout/home.component';
import { ProListingComponent } from './products/pro-listing/pro.listing.component';
import { ProDetailComponent } from './products/pro-detail/pro-detail.component';


//import { AppComponent } from './app.component';
 

@NgModule({
  declarations: [
  AppComponent,
   BidingsComponent,
   EventsComponent,
   ConditionsComponent,
   HeaderComponent,
   HomeComponent,
   ProListingComponent,
   ProDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
