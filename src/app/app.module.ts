import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import {FormsModule} from "@angular/forms";
import { AppComponent } from "./app.component";
import { Routes, RouterModule } from "@angular/router";
import { BidingsComponent } from "./examples/bindings.component";
import { EventsComponent } from "./examples/events.component";
import { ConditionsComponent } from "./examples/conditions.component";
import { HeaderComponent } from "./layout/header.component";
import { HomeComponent } from "./layout/home.component";
import { ProListingComponent } from "./products/pro-listing/pro.listing.component";
import { ProDetailComponent } from "./products/pro-detail/pro-detail.component";
import { ProCompleteDetailsComponent } from "./products/pro-complete-details/pro-complete-details.component";
import { HighlightDirective } from "./directive/highlight.directive";
import { ProductService } from "./products/product.service";
import { ObservablesComponent } from "./observables/observables.component";
import { OrderComponent } from "./order/order.component";
import { AboutusComponent } from "./aboutus/aboutus.component";
import { IntroComponent } from "./intro/intro.component";
import { DashboardComponent } from "./order/dashboard/dashboard.component";
import { PendingComponent } from "./order/pending/pending.component";
import { CompletedComponent } from "./order/completed/completed.component";
import { NotFoundComponent } from './not-found/not-found.component';
import { ItemRegistrationComponent } from './item-registration/item-registration.component';
import { ErrorsComponent } from './errors/errors.component';

//import { AppComponent } from './app.component';

var routes: Routes = [
  { path: "", component: IntroComponent },
  { path: "intro", redirectTo: "", pathMatch: "full" },
  { path: "about-us", component: AboutusComponent },
  {
    path: "order",
    component: OrderComponent,
    children: [
      { path: "", component: DashboardComponent },
      { path: "pending", component: PendingComponent },
      { path: "completed", component: CompletedComponent }
    ]
  },
  {path:"item-reg",component:ItemRegistrationComponent},
  {path:"**",component:NotFoundComponent}// not found matching
];

@NgModule({
  declarations: [
    AppComponent,
    BidingsComponent,
    EventsComponent,
    ConditionsComponent,
    HeaderComponent,
    HomeComponent,
    ProListingComponent,
    ProDetailComponent,
    ProCompleteDetailsComponent,
    HighlightDirective,
    ObservablesComponent,
    OrderComponent,
    AboutusComponent,
    IntroComponent,
    DashboardComponent,
    PendingComponent,
    CompletedComponent,
    NotFoundComponent,
    ItemRegistrationComponent,
    ErrorsComponent
  ],
  imports: [BrowserModule, FormsModule,RouterModule.forRoot(routes)],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {}
