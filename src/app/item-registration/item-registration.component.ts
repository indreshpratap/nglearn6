import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-registration',
  templateUrl: './item-registration.component.html',
  styleUrls: ['./item-registration.component.css']
})
export class ItemRegistrationComponent implements OnInit {

  reg;
  constructor() { }

  ngOnInit() {
    this.reg = {
      itemName:null,
      description:null,
      price:null,
      category:null,
      quantity:null,
      preference:null,
      coldDrink:null,
      snacks:null,
     
    }
  }

  saveItem(form) {
    console.log(form);
  }

}
