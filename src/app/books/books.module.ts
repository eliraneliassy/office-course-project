import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import {BookModule} from "../book/book.module";
import {BooksComponent} from "./books.component";




@NgModule({
  declarations: [
    BooksComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    BookModule
  ]
})
export class BooksModule { }
