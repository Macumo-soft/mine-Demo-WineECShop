import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'c-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() buttonLabel : string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
