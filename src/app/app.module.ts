import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { BidingsComponent } from './examples/bindings.component';


//import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
   HeaderComponent,
   BidingsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
