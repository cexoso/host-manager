import { Component } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-textfield',
  templateUrl: './textfield.component.html',
  styleUrls: ['./textfield.component.css']
})
export class TextfieldComponent {
  @Input() xx;
  @Output() xxChange: EventEmitter<string>;
  myCtrl;
  constructor() {
    this.xxChange = new EventEmitter();
    this.myCtrl = new FormControl();
    this.myCtrl.valueChanges.subscribe(
      (data) => this.xxChange.next(data)
    );
  }
}
