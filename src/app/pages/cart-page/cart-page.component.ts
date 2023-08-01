import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { LibraryService } from 'src/app/services/library.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css'],
})
export class CartPageComponent {
  constructor(private library: LibraryService, private cart: CartService) {}

  item: any;

  ngOnInit(): void {
    this.getAllBooks();
  }

  getAllBooks() {
    this.cart.viewCart().subscribe((result) => {
      console.log(result.data);
    });
  }
}
