import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookSearchMainComponent } from './bookSearch/book-search-main/book-search-main.component';
import { MovieSearchMainComponent } from './movieSearch/movie-search-main/movie-search-main.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'book', component:BookSearchMainComponent },
  { path: 'movie',component:MovieSearchMainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
