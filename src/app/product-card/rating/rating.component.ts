import { Component, OnInit, Input } from '@angular/core';
import { ProductRating } from '../../others/product.types';

@Component({
  selector: 'app-rating',
  template: `
  <span class="card__rating">
    <input type='radio' class='card__rating-star' readonly [class.gold]='1 <= rating.value' id='rate1' name="rating" value="1"><label class='card__rating-label' for="rate1"></label>
    <input type='radio' class='card__rating-star' readonly [class.gold]='2 <= rating.value' id='rate2' name="rating" value="2"><label class='card__rating-label' for="rate2"></label>
    <input type='radio' class='card__rating-star' readonly [class.gold]='3 <= rating.value' id='rate3' name="rating" value="3"><label class='card__rating-label' for="rate3"></label>
    <input type='radio' class='card__rating-star' readonly [class.gold]='4 <= rating.value' id='rate4' name="rating" value="4"><label class='card__rating-label' for="rate4"></label>
    <input type='radio' class='card__rating-star' readonly [class.gold]='5 <= rating.value' id='rate5' name="rating" value="5"><label class='card__rating-label' for="rate5"></label>
  </span>
  <span class="card__reviews">{{rating.reviews}} отзывов</span>
  `,
  styles: [`
    .card__rating {
      display: inline-block;
      margin-bottom: 8px;
    }
    .card__rating-star {
      display: none
    }
    .card__rating-label::after {
      content:'';
      display: inline-block;
      width: 15px;
      height: 15px;
      margin-right: 5px;
      background-image: url('../../assets/pictures/star.svg');
      background-position: center center;
      background-repeat: no-repeat;
    }
    .gold + .card__rating-label::after {
      background-image: url('../../assets/pictures/star_gold.svg');
    }
    .card__reviews {
      display: inline-block;
      max-width: 100%;
      height: 15px;
      color: rgb(150,150,150);
    }
  `]
})
export class RatingComponent implements OnInit {
  @Input() rating: ProductRating
  constructor() { }

  ngOnInit(): void {
  }

}
