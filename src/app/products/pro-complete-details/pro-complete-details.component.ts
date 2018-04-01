import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-pro-complete-details',
    templateUrl: 'pro-complete-details.component.html',
    styles:['.note{border:1px solid;padding:10px}']
})

export class ProCompleteDetailsComponent implements OnInit,OnChanges {
   
   
    @Input() product: any;
     @Input() showcart:boolean;
    @Input() index:number;
   
    constructor() { }

    ngOnInit() { } 
    ngOnChanges(changes: SimpleChanges): void {
       console.log("Onchanges",changes);
    }

    getSelection(){
        return {dept:1,role:2,users:[1,2,3]};
    }
}