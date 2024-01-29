import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Books } from '../book';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent {
  @Input() book!: Books;
}
