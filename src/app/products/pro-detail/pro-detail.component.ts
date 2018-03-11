import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-pro-detail',
    templateUrl: 'pro-detail.component.html'
})

export class ProDetailComponent  {
    
    @Input()
   product:any;
}