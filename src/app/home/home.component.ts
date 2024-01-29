import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from '../book/book.component';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { BooksService } from '../book.service';
import { Books } from '../book';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, BookComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  booksList: Books[] = [];
  lastBooks: Books[] = [];
  booksService: BooksService = inject(BooksService);
  filteredBooksList: Books[] = [];
  searchQuery!: string;
  value!: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.booksList = this.booksService.getAllBooks();
    this.lastBooks = this.booksService.getThreeBooks();
    this.filteredBooksList = this.lastBooks;
  }

  ngOnInit() {
    this.searchQuery = this.activatedRoute.snapshot.queryParams['search'];
    if (this.searchQuery) {
      this.filteredBooksList = this.booksList.filter((books) =>
        books?.title.toLowerCase().includes(this.searchQuery)
      );
    }
  }
  
  getSearchValue() {
    this.searchQuery = this.activatedRoute.snapshot.queryParams['search'];
    if (!this.searchQuery) {
      return '';
    }
    return this.searchQuery;
  }

  filterResults(text: string, e: { preventDefault: () => void }): void {
    e.preventDefault();
    if (!text) {
      this.filteredBooksList = this.lastBooks;
      return;
    }

    this.filteredBooksList = this.booksList.filter((books) =>
      books?.title.toLowerCase().includes(text.toLowerCase())
    );

    this.router.navigate([''], {
      queryParams: { search: text },
      relativeTo: this.activatedRoute,
      replaceUrl: true,
    });
  }
}
