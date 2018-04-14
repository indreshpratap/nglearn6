import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  ContentChild
} from "@angular/core";
import { HighlightDirective } from "../../directive/highlight.directive";

@Component({
  selector: "app-pro-complete-details",
  templateUrl: "pro-complete-details.component.html",
  styles: [".note{border:1px solid;padding:10px}"]
})
export class ProCompleteDetailsComponent implements OnInit, OnChanges {
  @Input() product: any;
  @Input() showcart: boolean;
  @Input() index: number;

  @ContentChild(HighlightDirective) contentElm: HighlightDirective;
  constructor() {}

  ngOnInit() {
      console.log("OnInit", this.contentElm);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("Onchanges", changes);
  }

  getSelection() {
    return { dept: 1, role: 2, users: [1, 2, 3] };
  }
}
