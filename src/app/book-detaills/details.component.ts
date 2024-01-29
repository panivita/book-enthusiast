import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../book.service';
import { Books } from '../book';

@Component({
	selector: 'app-details',
	standalone: true,
	imports: [
		CommonModule,
	],
	templateUrl: './details.component.html',
	styleUrls: ['./details.component.css'],
})
export class BookDetailsComponent {
	route: ActivatedRoute = inject(ActivatedRoute);
	booksService = inject(BooksService);
	book: Books | undefined;

	constructor() {
		const bookId = parseInt(this.route.snapshot.params['id'], 10);
		this.book = this.booksService.getBookById(bookId);
	}
}
