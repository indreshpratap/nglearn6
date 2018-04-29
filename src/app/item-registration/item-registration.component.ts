import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-registration',
  templateUrl: './item-registration.component.html',
  styleUrls: ['./item-registration.component.css']
})
export class ItemRegistrationComponent implements OnInit {

  reg;

  items=[];
  constructor() { }

  ngOnInit() {
    this.reg = {
      itemName:"Test",
      description:null,
      price:null,
      category:"South Indian",
      quantity:null,
      preference:"Veg",
      coldDrink:null,
      snacks:null,
     
    }
  }

  saveItem(form) {
    if(form.valid){
     this.items.push(form.value);
     form.reset();
    }
  }

}
