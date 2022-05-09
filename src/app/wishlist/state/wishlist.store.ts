import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import {Book} from "../../books.interface";

export interface WishlistState {
  likedBooks: Book[];
}

export function createInitialState(): WishlistState {
  return {
    likedBooks: []
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'wishlist' })
export class WishlistStore extends Store<WishlistState> {

  constructor() {
    super(createInitialState());
  }
}
