import { Component } from "@angular/core";

@Component({
    selector:"app-bindings",
    templateUrl:"./bindings.component.html"
})
export class BidingsComponent {

    message = "Welcome to angluar";
    count = 10;
    flag = false;
    user = {name:"Indresh"};
    colors = ['green','yellow'];
    navItemId="nav-item-3";

    active="small active";

    classArray = ['active','small'];
    classObject = {
        'active':true,
        'small':true
    }
    
    styleObject = {
        color:"yellow",
        height:'200px'
    }
    constructor() {
        console.log("Constructor called");
        setInterval(() =>{
            this.navItemId = 'nav-item-'+(++this.count);
            this.flag = !this.flag;
            this.classObject.active= this.flag;
            this.classObject.small = !this.flag;
            if(this.classArray.length<4) {
                this.classArray.push(this.navItemId);
            }
        }, 2000);
    }
}