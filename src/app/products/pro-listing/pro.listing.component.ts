import { Component, OnInit, ViewChild, QueryList, ViewChildren } from "@angular/core";
import { ProCompleteDetailsComponent } from "../pro-complete-details/pro-complete-details.component";
import { ProDetailComponent } from "../pro-detail/pro-detail.component";
import { ProductService } from "../product.service";

@Component({
  selector: "app-pro-listing",
  templateUrl: "pro.listing.component.html",
  styles: [".first,.last {font-weight:bold}"]
})
export class ProListingComponent implements OnInit {
  productList: Array<any>;
  gridDisplay = false;
  cartList = [];
  currentSeletedItem:any;
  currentSelectedIndex:number;
  showCartBtn=false;

  // productService:ProductService;

  @ViewChild("detail")
  prodDetail:ProCompleteDetailsComponent;

  @ViewChild("cartbtn")
  btn:any;

  @ViewChild(ProCompleteDetailsComponent)
  byType:ProCompleteDetailsComponent;

  @ViewChildren(ProDetailComponent)
  proDetails:QueryList<ProDetailComponent>;
  
  ngOnInit() {
    console.log("Product lising ngOnInit");
     this.productList = this.ps.getProducts();
  }

  //dependency injection of ProductService
  constructor(private ps:ProductService) {
    console.log("Product listing constructor");
    // this.productService=ps;
   
  }

  pushToTop() {
    this.productList.unshift({
      id: 1000,
      title: "Shopify T-Samsung",
      handle: "shopify-mobile",
      body_html:
        '\u003cp\u003eSo this is a product.\u003c/p\u003e\n\n\n\t\u003cp\u003eThe text you see here is a Product Description. Every product has a price, a weight, a picture and a description.  To edit the description of this product or to create a new product you can go to the \u003ca href="/admin/products"\u003eProducts Tab\u003c/a\u003e of the administration menu.\u003c/p\u003e\n\n\n\t\u003cp\u003eOnce you have mastered the creation and editing of products you will want your products to show up on your Shopify site.  There is a two step process to do this.\u003c/p\u003e\n\n\n\t\u003cp\u003eFirst you need to add your products to a Collection.  A Collection is an easy way to group products together. If you go to the \u003ca href="/admin/collections"\u003eCollections Tab\u003c/a\u003e of the administration menu you can begin creating collections and adding products to them.\u003c/p\u003e\n\n\n\t\u003cp\u003eSecond you\u0026#8217;ll need to create a link from your shop\u0026#8217;s navigation menu to your Collections. You can do this by going to the \u003ca href="/admin/links"\u003eNavigations Tab\u003c/a\u003e of the administration menu and clicking on \u0026#8220;Add a link\u0026#8221;.\u003c/p\u003e\n\n\n\t\u003cp\u003eGood luck with your shop!\u003c/p\u003e',
      published_at: "2006-06-03T01:28:13-04:00",
      created_at: "2006-06-03T01:28:13-04:00",
      updated_at: "2014-08-05T16:58:27-04:00",
      vendor: "Shopify",
      product_type: "Mobile",
      tags: ["mobile", "android"]
    });
  }

  addLast() {
    this.productList.push(this.ps.getNewProduct());
  }
  toogleMode() {
    this.gridDisplay = !this.gridDisplay;
  }
  pushToCart(event) {
    console.log("Received at parent end and data is: ", event);
    event.qty = 1;
    this.cartList.push(event);
  }

  removeFromCart(indx) {
    if (confirm("Are you sure want to remove?")) {
      this.cartList.splice(indx, 1);
    }
  }

  increment(item) {
    ++item.qty;
  }
  decrement(item) {
    --item.qty;
  }

  showDetail(indx){
    this.currentSelectedIndex = indx;
    this.getNextOne();
  }

  next(){
    ++this.currentSelectedIndex;
    this.getNextOne();
  }

  getNextOne(){
    this.currentSeletedItem = this.productList[this.currentSelectedIndex];
    
  }

  modifyCurrentSelectedItemData(){
    this.currentSeletedItem.title = "Title changed";
  }

  printDetail(detail:ProCompleteDetailsComponent){
    // by parameter
    console.log("parameter",detail.getSelection());

    // by reference
    console.log("reference",this.prodDetail.getSelection());

    // by type
    console.log("by type",this.byType.getSelection());
    console.log(this.btn);

    console.log(this.proDetails);
  }

  
}
