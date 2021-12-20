import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatTableModule } from '@angular/material/table';
import { HomeComponent } from './pages/home/home.component';
import { BookSearchMainComponent } from './bookSearch/book-search-main/book-search-main.component';
import { MovieSearchMainComponent } from './movieSearch/movie-search-main/movie-search-main.component'
import { BookSearchModule } from './book-search/book-search.module';
import { MovieSearchModule } from './movie-search/movie-search.module';
import { SearchBoxComponent } from './bookSearch/search-box/search-box.component';
import { DetailBoxComponent } from './bookSearch/detail-box/detail-box.component';
import { ListBoxComponent } from './bookSearch/list-box/list-box.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookSearchMainComponent,
    MovieSearchMainComponent,
    SearchBoxComponent,
    DetailBoxComponent,
    ListBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    BookSearchModule,
    MovieSearchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
