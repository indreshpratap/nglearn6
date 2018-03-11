import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-pro-listing",
  templateUrl: "pro.listing.component.html",
  styles:['.first,.last {font-weight:bold}']
})
export class ProListingComponent {
  productList: Array<any>;
  gridDisplay = true;
  constructor() {
    this.productList = [
      {
        id: 4450,
        title: "Shopify T-Shirt",
        handle: "shopify-t-shirt",
        body_html:
          '\u003cp\u003eSo this is a product.\u003c/p\u003e\n\n\n\t\u003cp\u003eThe text you see here is a Product Description. Every product has a price, a weight, a picture and a description.  To edit the description of this product or to create a new product you can go to the \u003ca href="/admin/products"\u003eProducts Tab\u003c/a\u003e of the administration menu.\u003c/p\u003e\n\n\n\t\u003cp\u003eOnce you have mastered the creation and editing of products you will want your products to show up on your Shopify site.  There is a two step process to do this.\u003c/p\u003e\n\n\n\t\u003cp\u003eFirst you need to add your products to a Collection.  A Collection is an easy way to group products together. If you go to the \u003ca href="/admin/collections"\u003eCollections Tab\u003c/a\u003e of the administration menu you can begin creating collections and adding products to them.\u003c/p\u003e\n\n\n\t\u003cp\u003eSecond you\u0026#8217;ll need to create a link from your shop\u0026#8217;s navigation menu to your Collections. You can do this by going to the \u003ca href="/admin/links"\u003eNavigations Tab\u003c/a\u003e of the administration menu and clicking on \u0026#8220;Add a link\u0026#8221;.\u003c/p\u003e\n\n\n\t\u003cp\u003eGood luck with your shop!\u003c/p\u003e',
        published_at: "2006-06-03T01:28:13-04:00",
        created_at: "2006-06-03T01:28:13-04:00",
        updated_at: "2014-08-05T16:58:27-04:00",
        vendor: "Shopify",
        product_type: "Shirts",
        tags: ["mensware", "tshirts"]
      },
      {
        id: 4450,
        title: "Shopify T-Jeans",
        handle: "shopify-t-jeans",
        body_html:
          '\u003cp\u003eSo this is a product.\u003c/p\u003e\n\n\n\t\u003cp\u003eThe text you see here is a Product Description. Every product has a price, a weight, a picture and a description.  To edit the description of this product or to create a new product you can go to the \u003ca href="/admin/products"\u003eProducts Tab\u003c/a\u003e of the administration menu.\u003c/p\u003e\n\n\n\t\u003cp\u003eOnce you have mastered the creation and editing of products you will want your products to show up on your Shopify site.  There is a two step process to do this.\u003c/p\u003e\n\n\n\t\u003cp\u003eFirst you need to add your products to a Collection.  A Collection is an easy way to group products together. If you go to the \u003ca href="/admin/collections"\u003eCollections Tab\u003c/a\u003e of the administration menu you can begin creating collections and adding products to them.\u003c/p\u003e\n\n\n\t\u003cp\u003eSecond you\u0026#8217;ll need to create a link from your shop\u0026#8217;s navigation menu to your Collections. You can do this by going to the \u003ca href="/admin/links"\u003eNavigations Tab\u003c/a\u003e of the administration menu and clicking on \u0026#8220;Add a link\u0026#8221;.\u003c/p\u003e\n\n\n\t\u003cp\u003eGood luck with your shop!\u003c/p\u003e',
        published_at: "2006-06-03T01:28:13-04:00",
        created_at: "2006-06-03T01:28:13-04:00",
        updated_at: "2014-08-05T16:58:27-04:00",
        vendor: "Shopify",
        product_type: "Jeans",
        tags: ["mensware", "tshirts"]
      },
      {
        id: 4450,
        title: "Shopify T-Shirt",
        handle: "shopify-t-shirt",
        body_html:
          '\u003cp\u003eSo this is a product.\u003c/p\u003e\n\n\n\t\u003cp\u003eThe text you see here is a Product Description. Every product has a price, a weight, a picture and a description.  To edit the description of this product or to create a new product you can go to the \u003ca href="/admin/products"\u003eProducts Tab\u003c/a\u003e of the administration menu.\u003c/p\u003e\n\n\n\t\u003cp\u003eOnce you have mastered the creation and editing of products you will want your products to show up on your Shopify site.  There is a two step process to do this.\u003c/p\u003e\n\n\n\t\u003cp\u003eFirst you need to add your products to a Collection.  A Collection is an easy way to group products together. If you go to the \u003ca href="/admin/collections"\u003eCollections Tab\u003c/a\u003e of the administration menu you can begin creating collections and adding products to them.\u003c/p\u003e\n\n\n\t\u003cp\u003eSecond you\u0026#8217;ll need to create a link from your shop\u0026#8217;s navigation menu to your Collections. You can do this by going to the \u003ca href="/admin/links"\u003eNavigations Tab\u003c/a\u003e of the administration menu and clicking on \u0026#8220;Add a link\u0026#8221;.\u003c/p\u003e\n\n\n\t\u003cp\u003eGood luck with your shop!\u003c/p\u003e',
        published_at: "2006-06-03T01:28:13-04:00",
        created_at: "2006-06-03T01:28:13-04:00",
        updated_at: "2014-08-05T16:58:27-04:00",
        vendor: "Shopify",
        product_type: "Shirts",
        tags: ["mensware", "tshirts"]
      },
      {
        id: 4450,
        title: "Shopify T-Shirt",
        handle: "shopify-t-shirt",
        body_html:
          '\u003cp\u003eSo this is a product.\u003c/p\u003e\n\n\n\t\u003cp\u003eThe text you see here is a Product Description. Every product has a price, a weight, a picture and a description.  To edit the description of this product or to create a new product you can go to the \u003ca href="/admin/products"\u003eProducts Tab\u003c/a\u003e of the administration menu.\u003c/p\u003e\n\n\n\t\u003cp\u003eOnce you have mastered the creation and editing of products you will want your products to show up on your Shopify site.  There is a two step process to do this.\u003c/p\u003e\n\n\n\t\u003cp\u003eFirst you need to add your products to a Collection.  A Collection is an easy way to group products together. If you go to the \u003ca href="/admin/collections"\u003eCollections Tab\u003c/a\u003e of the administration menu you can begin creating collections and adding products to them.\u003c/p\u003e\n\n\n\t\u003cp\u003eSecond you\u0026#8217;ll need to create a link from your shop\u0026#8217;s navigation menu to your Collections. You can do this by going to the \u003ca href="/admin/links"\u003eNavigations Tab\u003c/a\u003e of the administration menu and clicking on \u0026#8220;Add a link\u0026#8221;.\u003c/p\u003e\n\n\n\t\u003cp\u003eGood luck with your shop!\u003c/p\u003e',
        published_at: "2006-06-03T01:28:13-04:00",
        created_at: "2006-06-03T01:28:13-04:00",
        updated_at: "2014-08-05T16:58:27-04:00",
        vendor: "Shopify",
        product_type: "Shirts",
        tags: ["mensware", "tshirts"]
      },
      {
        id: 4450,
        title: "Shopify T-Shirt",
        handle: "shopify-t-shirt",
        body_html:
          '\u003cp\u003eSo this is a product.\u003c/p\u003e\n\n\n\t\u003cp\u003eThe text you see here is a Product Description. Every product has a price, a weight, a picture and a description.  To edit the description of this product or to create a new product you can go to the \u003ca href="/admin/products"\u003eProducts Tab\u003c/a\u003e of the administration menu.\u003c/p\u003e\n\n\n\t\u003cp\u003eOnce you have mastered the creation and editing of products you will want your products to show up on your Shopify site.  There is a two step process to do this.\u003c/p\u003e\n\n\n\t\u003cp\u003eFirst you need to add your products to a Collection.  A Collection is an easy way to group products together. If you go to the \u003ca href="/admin/collections"\u003eCollections Tab\u003c/a\u003e of the administration menu you can begin creating collections and adding products to them.\u003c/p\u003e\n\n\n\t\u003cp\u003eSecond you\u0026#8217;ll need to create a link from your shop\u0026#8217;s navigation menu to your Collections. You can do this by going to the \u003ca href="/admin/links"\u003eNavigations Tab\u003c/a\u003e of the administration menu and clicking on \u0026#8220;Add a link\u0026#8221;.\u003c/p\u003e\n\n\n\t\u003cp\u003eGood luck with your shop!\u003c/p\u003e',
        published_at: "2006-06-03T01:28:13-04:00",
        created_at: "2006-06-03T01:28:13-04:00",
        updated_at: "2014-08-05T16:58:27-04:00",
        vendor: "Shopify",
        product_type: "Shirts",
        tags: ["mensware", "tshirts"]
      }
      
    
    ];
  }

  pushToTop(){
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

  addLast(){
      this.productList.push({
        id: 2000,
        title: "Shopify T-MI-TV",
        handle: "shopify-mi-tv",
        body_html:
          '\u003cp\u003eSo this is a product.\u003c/p\u003e\n\n\n\t\u003cp\u003eThe text you see here is a Product Description. Every product has a price, a weight, a picture and a description.  To edit the description of this product or to create a new product you can go to the \u003ca href="/admin/products"\u003eProducts Tab\u003c/a\u003e of the administration menu.\u003c/p\u003e\n\n\n\t\u003cp\u003eOnce you have mastered the creation and editing of products you will want your products to show up on your Shopify site.  There is a two step process to do this.\u003c/p\u003e\n\n\n\t\u003cp\u003eFirst you need to add your products to a Collection.  A Collection is an easy way to group products together. If you go to the \u003ca href="/admin/collections"\u003eCollections Tab\u003c/a\u003e of the administration menu you can begin creating collections and adding products to them.\u003c/p\u003e\n\n\n\t\u003cp\u003eSecond you\u0026#8217;ll need to create a link from your shop\u0026#8217;s navigation menu to your Collections. You can do this by going to the \u003ca href="/admin/links"\u003eNavigations Tab\u003c/a\u003e of the administration menu and clicking on \u0026#8220;Add a link\u0026#8221;.\u003c/p\u003e\n\n\n\t\u003cp\u003eGood luck with your shop!\u003c/p\u003e',
        published_at: "2006-06-03T01:28:13-04:00",
        created_at: "2006-06-03T01:28:13-04:00",
        updated_at: "2014-08-05T16:58:27-04:00",
        vendor: "Shopify",
        product_type: "Television",
        tags: ["MI", "TV"]
      });
  }
  toogleMode() {
    this.gridDisplay = !this.gridDisplay;
  }
}
