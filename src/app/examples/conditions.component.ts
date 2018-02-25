import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-conditions',
    templateUrl: './conditions.component.html'
})

export class ConditionsComponent {
    
    status:number=0;

    show(type) {
        this.status=type;
    }
}