import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookSearchMainComponent } from './book-search-main/book-search-main.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { ListBoxComponent } from './list-box/list-box.component';
import { DetailBoxComponent } from './detail-box/detail-box.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { COMPOSITION_BUFFER_MODE } from '@angular/forms';


@NgModule({
  declarations: [
    BookSearchMainComponent,
    SearchBoxComponent,
    ListBoxComponent,
    DetailBoxComponent  
  ],
  providers:[
    {
      provide:COMPOSITION_BUFFER_MODE,
      useValue:false
    }
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    FormsModule
  ]
})
export class BookSearchModule { }
