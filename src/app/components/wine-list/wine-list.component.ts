import { IWine } from './../../interface/service.interface';
import { ISelect, SelectConstants } from './../../constants/select.constants';
import { Component, OnInit } from '@angular/core';
import { WineService } from 'src/app/service/wine-service';

@Component({
  selector: 'c-wine-list',
  templateUrl: './wine-list.component.html',
  styleUrls: ['./wine-list.component.scss']
})
export class WineListComponent implements OnInit {
  selectList: ISelect[] = SelectConstants.getSelectList();

  constructor(private wineService: WineService) { }

  ngOnInit(): void {}

  wineItemList: IWine[] = this.wineService.getWineList();
}
