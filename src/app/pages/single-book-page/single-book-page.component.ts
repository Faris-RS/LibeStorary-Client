import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/models/bookModel';
import { LibraryService } from 'src/app/services/library.service';

@Component({
  selector: 'app-single-book-page',
  templateUrl: './single-book-page.component.html',
  styleUrls: ['./single-book-page.component.css'],
})
export class SingleBookPageComponent {
  constructor(
    private router: ActivatedRoute,
    private library: LibraryService
  ) {}

  title: string = '';
  details!: Book;

  ngOnInit(): void {
    let getParamId = this.router.snapshot.paramMap.get('id');
    this.title = JSON.stringify(getParamId);
    this.title = this.title.replace(/['"]+/g, '');
    this.getBookDetails();
  }

  getBookDetails(): void {
    this.library.getBookDetails(this.title).subscribe((result) => {
      this.details = result.data[0];
      console.log(this.details);
    });
  }
}
