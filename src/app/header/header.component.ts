import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {WishlistQuery} from "../wishlist/state/wishlist.query";
import {Observable} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  numerOfLikedBooks$: Observable<number> = this.wishlistQuery.selectNumberOfLikedBooks$;

  constructor(private wishlistQuery: WishlistQuery) { }

  ngOnInit(): void {
  }

}
