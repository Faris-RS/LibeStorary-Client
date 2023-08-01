import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/models/bookModel';
import { LibraryService } from 'src/app/services/library.service';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css'],
})
export class CategoryPageComponent {
  constructor(
    private router: ActivatedRoute,
    private library: LibraryService
  ) {}

  categoryDescriptions: { [key: string]: string } = {
    Thriller: 'detective',
    Horror: 'spooky',
    Fiction: 'illusion',
    History: 'past',
  };

  category: string = '';
  category_description: string = '';
  books: Book[] = [];

  ngOnInit(): void {
    let getParamId = this.router.snapshot.paramMap.get('id');
    this.category = JSON.stringify(getParamId);
    this.category = this.category.replace(/['"]+/g, '');
    this.category_description = this.categoryDescriptions[this.category];
    this.getCategoryBooks();
  }

  getCategoryBooks(): void {
    this.library.fetchCategoryBooks(this.category).subscribe((result) => {
      this.books = result.data;
    });
  }
}
