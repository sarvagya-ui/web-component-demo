import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-ng-card-element',
  templateUrl: './ng-card-element.component.html',
  styleUrls: ['./ng-card-element.component.scss'],
   encapsulation: ViewEncapsulation.ShadowDom
})
export class NgCardElementComponent implements OnInit {

  title = 'Angular Elements';
  @Input() name="sarvagya";
  @Input() answer = "yes!";

  @Output() likeNotify = new EventEmitter<boolean>();

  likeEvent() {
    this.likeNotify.emit(true);
  }


  constructor() {
    debugger;
  }

  ngOnInit(): void {
  }

}
