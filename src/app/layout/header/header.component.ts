import { IIcon, IconConstants } from './../../constants/icon.constants';
import { Component, OnInit } from '@angular/core';
import { ImageConstants } from 'src/app/constants/image.constants';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  // styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public iconList : IIcon[] = IconConstants.getIcons();
  public logoImage: string = ImageConstants.wineLogo.imageUrl;

}
