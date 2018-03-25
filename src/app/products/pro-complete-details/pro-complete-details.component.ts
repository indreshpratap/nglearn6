import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-pro-complete-details',
    templateUrl: 'pro-complete-details.component.html'
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
}