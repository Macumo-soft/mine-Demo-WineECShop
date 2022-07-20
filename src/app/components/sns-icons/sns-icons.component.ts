import { Component, OnInit } from '@angular/core';
import { IconConstants, IIcon } from 'src/app/constants/icon.constants';
import { ImageConstants } from 'src/app/constants/image.constants';

@Component({
  selector: 'c-sns-icons',
  templateUrl: './sns-icons.component.html',
  styleUrls: ['./sns-icons.component.scss']
})
export class SnsIconsComponent implements OnInit {
  public titleLabel : string = "Visit Creator's Page";
  public iconList : IIcon[] = IconConstants.getIcons();
  public logoImage: string = ImageConstants.wineLogo.imageUrl;

  constructor() { }

  ngOnInit(): void {
  }


}
