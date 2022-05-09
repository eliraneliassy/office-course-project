import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import {Book} from "../../books.interface";

export interface BooksState {
  books: Book[];
  loading: boolean;
  term: string

}

export function createInitialState(): BooksState {
  return {
    books: [],
    loading: false,
    term: ''
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'books' })
export class BooksStore extends Store<BooksState> {

  constructor() {
    super(createInitialState());
  }
}
