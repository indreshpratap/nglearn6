import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-pro-detail",
  templateUrl: "pro-detail.component.html"
})
export class ProDetailComponent {
  @Input() product: any;

  @Output() onAddToCart: EventEmitter<any> = new EventEmitter<any>();

  cartButtonClick() {
    let data = { productId: this.product.id, productTitle: this.product.title };
    console.log("Sending data=", data);
    this.onAddToCart.emit(data);
  }
}
