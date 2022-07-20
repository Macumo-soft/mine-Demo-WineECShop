import { MenuConstants, IWineMenu } from './../../constants/menu.constants';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wine-menu',
  templateUrl: './wine-menu.component.html',
  // styleUrls: ['./wine-menu.component.scss']
})
export class WineMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  wineMenuList : IWineMenu[] = MenuConstants.getWineMenuList();

}
