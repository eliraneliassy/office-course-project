import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {WishlistQuery} from "./state/wishlist.query";

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WishlistComponent implements OnInit {

  likedBooks$ = this.wishListQuery.selectLikedBooks$;

  constructor(private wishListQuery: WishlistQuery) { }

  ngOnInit(): void {
  }

}
