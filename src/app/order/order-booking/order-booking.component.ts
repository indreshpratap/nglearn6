import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { OrderService } from "../../services/order.service";

@Component({
  selector: "app-order-booking",
  templateUrl: "./order-booking.component.html",
  styleUrls: ["./order-booking.component.css"]
})
export class OrderBookingComponent implements OnInit {
  orderForm: FormGroup;

  items;
  constructor(private orderService:OrderService) {}

  ngOnInit() {
    this.prepareFrom();
    this.items = this.orderService.getAllItems();
  }

  prepareFrom() {
    this.orderForm = new FormGroup({
      fullname: new FormControl("Mr.",[Validators.required]),
      mobile: new FormControl(null,[Validators.required]),
      email: new FormControl(null,[Validators.required]),
      address: new FormControl(null,[Validators.required,Validators.minLength(10)]),
      price: new FormControl()
    });
  }
  

  toogleForm(disable){
    if(disable){
    this.orderForm.disable();
    }else {
      this.orderForm.enable();
    }
  }

  populateValue(){
    this.orderForm.setValue({
      fullname:"Indresh",
      mobile: "9953093009",
      email:"ip@gmail.com",
      address: "Noida",
       price: 0
    });
  }

  partialValue(){
    this.orderForm.patchValue({
      fullname:"Indresh Singh",
      mobile: "9953093009",
      email:"ip@gmail.com"
      
    });
  }
}
