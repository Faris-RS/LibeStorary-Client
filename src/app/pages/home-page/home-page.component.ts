import { Component } from '@angular/core';
import { Book } from 'src/app/models/bookModel';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { LibraryService } from 'src/app/services/library.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {
  constructor(private library: LibraryService) {}

  books: Book[] = [];
  books1: Book[] = [];
  books2: Book[] = [];

  ngOnInit(): void {
    this.getAllBooks();
  }

  getAllBooks() {
    this.library.allBooks().subscribe((result) => {
      this.books = result.data;
      this.books1 = this.books.slice(0, 12);
      this.books2 = this.books.slice(12);
    });
  }
}
