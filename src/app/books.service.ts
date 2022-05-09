import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map, Observable } from 'rxjs';
import {BookResponse, BooksSearchFilters } from './books.interface';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private readonly httpClient: HttpClient) { }

  getBooks(filers: BooksSearchFilters): Observable<BookResponse> {
    return this.httpClient
      .get<any>(`https://www.googleapis.com/books/v1/volumes?q=${filers.term}&maxResults=${filers.itemsPerPage}&startIndex=${filers.page * filers.itemsPerPage}`)
      .pipe(
        map((res: any) => ({
          totalItems: res.totalItems,
          books: res.items.map((item: any) => item.volumeInfo).map(
            (book: any) => ({ title: book.title, previewImgUrl: book.imageLinks?.thumbnail })
          )
        })),
      );
  }
}
