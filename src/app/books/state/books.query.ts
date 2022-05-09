import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';

import {map, Observable} from "rxjs";
import {Book} from "../../books.interface";
import {BooksState, BooksStore} from "./books.store";

@Injectable({ providedIn: 'root' })
export class BooksQuery extends Query<BooksState> {

  selectBooks$: Observable<Book[]> =
    this.select((state) => state.books);
  selectLoading$: Observable<boolean> = this.select('loading');

  constructor(protected override store: BooksStore) {
  super(store);
}

}
