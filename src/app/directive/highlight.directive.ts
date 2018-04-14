import {
  Directive,
  OnInit,
  ElementRef,
  Input,
  HostListener
} from "@angular/core";

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
  }

  @HostListener("click")
  onClick() {
    console.log("Yes you clicked");
  }

  @HostListener("mouseenter")
  highlightOnEnter() {
    this._ref.nativeElement.style.backgroundColor =
      this.bgColor || "lightyellow";
  }

  @HostListener("mouseleave", ["$event"])
  clearOnLeave(ev) {
    console.log(ev);
    this._ref.nativeElement.style.backgroundColor = "";
  }
}
