import { Directive, OnInit, ElementRef, Input } from "@angular/core";

@Directive({
  selector: "[highlight]"
})
export class HighlightDirective implements OnInit {
  _ref: ElementRef;
  constructor(ref: ElementRef) {
    this._ref = ref;
  }

  @Input("highlight") bgColor: string;

  ngOnInit(): void {
    console.log(this._ref);
    this._ref.nativeElement.style.backgroundColor =
      this.bgColor || "lightyellow";
  }
}
