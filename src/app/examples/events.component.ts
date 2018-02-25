import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-events',
    templateUrl: './events.component.html'
})

export class EventsComponent {

    uid=10;
    description=' Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quas esse modi quam ab placeat ad pariatur accusamus molestiae fugit, possimus quis ullam quisquam velit cumque sequi. Officia, quos rerum?';
    sayHello() {
        alert('Hello');
        this.description = 'changed';
    }

    fetchDataById(event,id) {
        console.log(`Fetching data for provided id: ${id}`,event);
    }
    onmouseover(event) {
        console.log('On mouse over',event);
    }

    clickWithCtrl(event) {
        console.log(event);
        if(event.ctrlKey||event.metaKey) {
            alert("Clicked with ctrl key pressed");
        }
    }

    getInfo(event) {
        console.log(event.target.id);
    }
  
}