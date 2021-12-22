import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatTableModule } from '@angular/material/table';
import { HomeComponent } from './pages/home/home.component';
import { BookSearchModule } from './bookSearch/book-search.module';
import { MovieSearchModule } from './movie-search/movie-search.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
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
