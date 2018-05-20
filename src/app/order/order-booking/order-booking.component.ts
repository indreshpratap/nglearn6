import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormArray
} from "@angular/forms";
import { OrderService } from "../../services/order.service";
import { CustomValidator } from "../../util/custom.validator";

@Component({
  selector: "app-order-booking",
  templateUrl: "./order-booking.component.html",
  styleUrls: ["./order-booking.component.css"]
})
export class OrderBookingComponent implements OnInit {
  orderForm: FormGroup;

  items;
  constructor(private orderService: OrderService, private fb: FormBuilder) {}

  ngOnInit() {
    this.prepareFrom();
   
    this.items = this.orderService.getAllItems();
  }

  prepareFrom() {
    // example of standard form group
    // this.orderForm = new FormGroup({
    //  fullname: new FormControl("Mr.",[Validators.required]),
    //   mobile: new FormControl(null,[Validators.required]),
    //   email: new FormControl(null,[Validators.required]),
    //   address: new FormControl(null,[Validators.required,Validators.minLength(10)]),
    //   price: new FormControl()
    // });

    this.orderForm = this.fb.group({
      fullname: ["Mr.", [Validators.required]],
      mobile: [null, [Validators.required,CustomValidator.mobile]],
      email: [null, [Validators.required]],
      address: [null, [Validators.required, Validators.minLength(10)]],
      price: [null, [Validators.required]],
      orderedItems: this.fb.array([]) 
    });

  
  }

 get orderedItems(){
  return  (this.orderForm.get("orderedItems") as FormArray);
}

  addItem() {
   this.orderedItems.push(
      this.fb.group({
        sel_item: [, [Validators.required]],
        qty: [, Validators.required]
      })
    );

    console.log(this.orderedItems);
  }

  toogleForm(disable) {
    if (disable) {
      this.orderForm.disable();
    } else {
      this.orderForm.enable();
    }
  }

  populateValue() {
    this.orderForm.setValue({
      fullname: "Indresh",
      mobile: "9953093009",
      email: "ip@gmail.com",
      address: "Noida",
      price: 0
    });
  }

  partialValue() {
    this.orderForm.patchValue({
      fullname: "Indresh Singh",
      mobile: "9953093009",
      email: "ip@gmail.com"
    });
  }
}
