import { Component, OnInit, Input, EventEmitter, Output, OnDestroy, AfterViewInit, AfterViewChecked, DoCheck } from "@angular/core";

@Component({
  selector: "app-pro-detail",
  templateUrl: "pro-detail.component.html"
})
export class ProDetailComponent implements OnInit,OnDestroy,AfterViewInit,AfterViewChecked,DoCheck {
 
 
  @Input() product: any;
  @Input("indx") index:number; // indx is an alias for index 
  @Output() onAddToCart: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit(){
    console.log("Product Details NgOnInit",this.index);
  }
  ngOnDestroy(): void {
    console.log("Product Details ngonDestroy",this.index);
  }
  ngAfterViewInit(): void {
    console.log("product details ngAfterViewInit",this.index);
  }

   
  ngAfterViewChecked(): void {
    console.log("product details After view checked",this.index);
  }
  ngDoCheck(): void {
   console.log("Ngdocheck",this.index);
  }
  
  cartButtonClick() {
    let data = { productId: this.product.id, productTitle: this.product.title };
    console.log("Sending data=", data);
    this.onAddToCart.emit(data);
  }
}
