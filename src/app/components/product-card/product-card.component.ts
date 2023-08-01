import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  cart = faCartPlus;

  @Input() title: string = '';
  @Input() description: string = '';
  @Input() category: string = '';
  @Input() author: string = '';
  @Input() backgroundImageUrl: string = '';

  @Output() addToCart = new EventEmitter<string>();
  addBook(title: string) {
    this.addToCart.emit(title);
  }
}
