import {Component, OnInit, ChangeDetectionStrategy, OnDestroy} from '@angular/core';
import {BooksService} from "../books.service";
import {debounceTime, distinctUntilChanged, Observable, Subject, Subscription, switchMap, tap} from "rxjs";
import {Book, BookResponse, BooksSearchFilters} from "../books.interface";
import {WishlistState, WishlistStore} from "../wishlist/state/wishlist.store";
import {BooksQuery} from "./state/books.query";
import {BooksState, BooksStore} from "./state/books.store";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BooksComponent implements OnInit, OnDestroy {

  results$: Observable<Book[]> = this.booksQuery.selectBooks$;
  search$: Subject<string> = new Subject<string>();

  subscription: Subscription = new Subscription();

  constructor(
    private booksService: BooksService,
    private wishListStore: WishlistStore,
    private booksQuery: BooksQuery,
    private booksStore: BooksStore) { }

  ngOnInit(): void {

    // this.results$ = this.search$.
    //   pipe(
    //     debounceTime(300),
    //     distinctUntilChanged(),
    //     switchMap((term: string) => {
    //       const filters: BooksSearchFilters = {
    //         term,
    //         itemsPerPage: 20,
    //         page: 0
    //       };
    //
    //       return this.booksService.getBooks(filters);
    //     })
    // )

    this.subscription = this.search$.
      pipe(
        debounceTime(300),
        distinctUntilChanged(),
      tap(() => this.booksStore.update(store => ({...store, loading: true}))),
      tap((term: string) => {
              const filters: BooksSearchFilters = {
                term,
                itemsPerPage: 20,
                page: 0
              };
        this.booksService.getBooks(filters).subscribe((booksRes: BookResponse) => {
          this.booksStore.update((currentState: BooksState) => ({...currentState, loading: false, books: booksRes.books}))
        })
      })).subscribe()

  }

  search(event: any) {
    this.search$.next(event.value);
  }

  addToWishList(book: Book){
    this.wishListStore.update(
      (currentStore: WishlistState) =>
        ({...currentStore, likedBooks: [...currentStore.likedBooks, book]})
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
