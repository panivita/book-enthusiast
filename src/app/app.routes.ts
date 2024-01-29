import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BooksPageComponent } from './books-page/books.component';
import { BookDetailsComponent } from './book-detaills/details.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page',
  },
  {
    path: 'books',
    component: BooksPageComponent,
    title: 'Books page',
  },
  {
    path: 'books/:id',
    component: BookDetailsComponent,
    title: 'Book details',
  },
];
