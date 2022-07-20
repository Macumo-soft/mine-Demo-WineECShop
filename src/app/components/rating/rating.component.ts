import { IconConstants } from './../../constants/icon.constants';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'c-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  @Input() rateScore: string = "";
  starIcon = IconConstants.star.name;
  starHalfIcon = IconConstants.starHalf.name;

  constructor() { }
  ngOnInit(): void { }

  public getScore(): { score: number, array: number[] } {
    let intScore = parseFloat(this.rateScore);

    let rateScore : { score: number, array: number[] } = {
      score: intScore,
      array: [],
    };
    
    while (intScore > 0) {
      if (intScore >= 1) {
        rateScore.array.push(1);
      } else {
        rateScore.array.push(0.5);
      }
      intScore--;
    }

    return rateScore;
  }
}

