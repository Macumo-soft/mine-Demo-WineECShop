import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'c-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  @Input() bannerImageUrl: string = "";

  constructor() {
  }

  ngOnInit(): void {
  }

}
