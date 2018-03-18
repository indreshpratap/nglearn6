import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-pro-detail",
  templateUrl: "pro-detail.component.html"
})
export class ProDetailComponent implements OnInit {
  @Input() product: any;
  @Input("indx") index:number; // indx is an alias for index 
  @Output() onAddToCart: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit(){
    console.log("Product Details NgOnInit",this.index);
  }
  cartButtonClick() {
    let data = { productId: this.product.id, productTitle: this.product.title };
    console.log("Sending data=", data);
    this.onAddToCart.emit(data);
  }
}
