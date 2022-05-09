import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import {WishlistState, WishlistStore} from "./wishlist.store";
import {map, Observable} from "rxjs";
import {Book} from "../../books.interface";


@Injectable({ providedIn: 'root' })
export class WishlistQuery extends Query<WishlistState> {

  selectLikedBooks$: Observable<Book[]> = this.select(
    'likedBooks'
  )

  selectNumberOfLikedBooks$: Observable<number> = this.selectLikedBooks$.pipe(
    map(books => books.length)
  );

  constructor(protected override store: WishlistStore) {
    super(store);
  }

}
