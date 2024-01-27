import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookComponent } from './books/books.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page'
  },
  {
    path: 'books',
    component: BookComponent,
    title: 'Books page'
  }
  /* {
    path: 'books/:id',
    component: BookDetailsComponent,
    title: 'Book details'
  } */
];
