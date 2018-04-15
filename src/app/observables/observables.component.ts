import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import "rxjs/Rx";

@Component({
  selector: "app-observables",
  templateUrl: "./observables.component.html",
  styleUrls: ["./observables.component.css"]
})
export class ObservablesComponent implements OnInit {
  constructor() {}

  logger: string="";

  ngOnInit() {
    let channel = Observable.create(observer => {
      observer.next(1);
      setTimeout(() => {
        observer.next(2);
      }, 1000);
      setTimeout(() => {
        observer.next(3);
      }, 2000);
      setTimeout(() => {
        observer.next(4);
      }, 3000);
      setTimeout(() => {
        observer.next(5);
      }, 4000);
      setTimeout(() => {
        observer.next(6);
      }, 5000);
      setTimeout(() => {
        observer.complete();
      }, 6000);
    });

    let firstsub = channel.subscribe(
      data => (this.logger += "First " + data + "\n"),
      err => console.log(err),
      () => (this.logger += "First complete\n")
    );

    setTimeout(() => {
      firstsub.unsubscribe();
    }, 2000);

    setTimeout(() => {
      channel
        .map(data => {
          return { count: data * 10 };
        })
        //.filter(data => data.count > 30)
        .subscribe(
          data => console.log("Second ", data),
          err => {
            console.log("Received Error", err);
          },
          () => {
            console.log("Second complete");
          }
        );
    }, 3000);
  }
}
