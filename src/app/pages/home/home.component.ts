import { Component, OnInit } from '@angular/core';
import { ImageConstants } from '../../constants/image.constants';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  topBannerImage: string = ImageConstants.topBanner.imageUrl;
  bottomBannerImage: string = ImageConstants.bottomBanner.imageUrl;

  quote : string = "Enjoy your time with the best wine";
  constructor() {
}

  ngOnInit(): void {
  }

}
