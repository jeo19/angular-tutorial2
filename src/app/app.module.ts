import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatTableModule } from '@angular/material/table';
import { HomeComponent } from './pages/home/home.component';
import { BookSearchMainComponent } from './bookSearch/book-search-main/book-search-main.component';
import { MovieSearchMainComponent } from './movieSearch/movie-search-main/movie-search-main.component'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookSearchMainComponent,
    MovieSearchMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
