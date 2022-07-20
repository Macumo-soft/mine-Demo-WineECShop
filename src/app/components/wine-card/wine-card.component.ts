import { WineService } from '../../service/wine-service';
import { Component, Input, OnInit } from '@angular/core';
import { IWine } from 'src/app/interface/service.interface';


@Component({
  selector: 'c-wine-card',
  templateUrl: './wine-card.component.html',
  // styleUrls: ['./wine-card.component.scss']
})
export class WineCardComponent implements OnInit {
  @Input() wineTitle: string | undefined;
  @Input() wineImg: string | undefined;
  @Input() wineStar: string | undefined;
  @Input() winePrice: string | undefined;

  constructor(private wineService: WineService) {}
  
  ngOnInit(): void {}
}