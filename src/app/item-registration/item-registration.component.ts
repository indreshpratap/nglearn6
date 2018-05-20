import { Component, OnInit } from "@angular/core";
import { OrderService } from "../services/order.service";

@Component({
  selector: "app-item-registration",
  templateUrl: "./item-registration.component.html",
  styleUrls: ["./item-registration.component.css"]
})
export class ItemRegistrationComponent implements OnInit {
  reg;

  items = [];
  constructor(private orderService: OrderService) {}

  ngOnInit() {
    this.loadItems();
    this.reg = {
      itemName: "Test",
      description: null,
      price: null,
      category: "South Indian",
      quantity: null,
      preference: "Veg",
      coldDrink: null,
      snacks: null
    };
  }

  loadItems() {
    this.orderService.getAllItems().subscribe(res => {
      this.items = res;
    });
  }

  saveItem(form) {
    if (form.valid) {
      this.orderService.saveNewItem(form.value).subscribe(res => {
        console.log("got response", res);
        this.loadItems();
        form.reset();
      });
    }
  }
}
