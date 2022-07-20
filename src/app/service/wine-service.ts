import { Injectable } from '@angular/core';
import { IWine } from '../interface/service.interface';

@Injectable({
  providedIn: 'root'
})
export class WineService{

  constructor() { }

  getWineList() : IWine[] {
    let wineList: IWine[] = [
      {
        title: "Broadleaf",
        img: 'https://images.unsplash.com/photo-1592845148519-b0d41df97ac2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80',
        star: "5.0",
        price: "120"
      },
      {
        title: "MOET & CHANDON IMPERIAL",
        img: 'https://images.unsplash.com/photo-1627242545267-26e40aaaeb80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1635&q=80',
        star: "4.5",
        price: "80"
      },
      {
        title: "ModA' Talamonti",
        img: 'https://images.unsplash.com/photo-1586370434639-0fe43b2d32e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1376&q=80',
        star: "4.5",
        price: "100"
      },
      {
        title: "MARLBOROUGH",
        img: 'https://images.unsplash.com/photo-1557682204-e53b55fd750c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1348&q=80',
        star: "4.0",
        price: "45  "
      },
    ];

    return wineList;
  }
}
