import { Component, Input } from '@angular/core';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  addToCart = faCartPlus
  
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() category: string = '';
  @Input() author: string = '';
  @Input() backgroundImageUrl: string = '';
}
