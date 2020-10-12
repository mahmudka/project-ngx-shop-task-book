import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-shop-star-rating',
  templateUrl: './star-rating.component.html',
})
// @ts-ignore
export class StarRatingComponent {
  @Input()
  //  @ts-ignore
  public feedbackRate = 0;
  public stars = [0, 1, 2, 3, 4];

  public highlight(index: number): boolean {
    return index + 1 <= Math.round(this.feedbackRate);
  }
}
