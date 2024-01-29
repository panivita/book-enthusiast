import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from '../book/book.component';

import { BooksService } from '../book.service';
import { Books } from '../book';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [
    CommonModule,
    BookComponent
  ],
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})

export class BooksPageComponent {
  booksList: Books[] = [];
  booksService: BooksService = inject(BooksService);

  constructor() {
    this.booksList = this.booksService.getAllBooks();
  }
}
