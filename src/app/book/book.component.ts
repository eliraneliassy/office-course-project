import {Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter} from '@angular/core';
import {Book} from "../books.interface";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookComponent implements OnInit {

  @Input() book: Book | null = null;
  @Output() addToWishList = new EventEmitter<Book>();

  constructor() { }

  ngOnInit(): void {
  }

  addToWishListClicked(){
    this.addToWishList.emit(this.book as Book);
  }

}
