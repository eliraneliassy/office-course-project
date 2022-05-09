import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Post} from "./post.interface";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  BASE_URL = `https://jsonplaceholder.typicode.com`;

  constructor(private httpClient: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(`${this.BASE_URL}/posts`);
  }


}
