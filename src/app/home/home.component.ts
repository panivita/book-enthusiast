import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from '../books/books.component';

import { BooksService } from '../book.service';
import { Books } from '../book';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    BookComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent {
  booksList: Books[] = [];
  booksService: BooksService = inject(BooksService);
  filteredBooksList: Books[] = [];

  constructor() {
    this.booksList = this.booksService.getAllBooks();
    this.filteredBooksList = this.booksList;
  }
  filterResults(text: string) {
    if (!text) {
      this.filteredBooksList = this.booksList;
      return;
    }

    this.filteredBooksList = this.booksList.filter(
      books => books?.title.toLowerCase().includes(text.toLowerCase())
    );
  }
}
