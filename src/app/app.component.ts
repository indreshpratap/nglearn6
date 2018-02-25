import { Component } from '@angular/core';

@Component({
  selector:'app-root',
  // template:`<h1>this is inine template</h1>
  // <b>test</b>
  // <span>click</span>
  // `,
  templateUrl:"./app.component.html",
  // styles:['h1{color:orange}']
  styleUrls:["./app.component.css"]
})
export class AppComponent {
  title = 'NG Learn';
  description  = "this is description";

  getDetails() {
    return "This is detail";
  }
}
