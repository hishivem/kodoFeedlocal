import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchSortComponent } from './search-sort/search-sort.component';
import { CardViewComponent } from './card-view/card-view.component';
import { TableViewComponent } from './table-view/table-view.component';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchSortComponent,
    CardViewComponent,
    TableViewComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [PaginationComponent]
})
export class AppModule { }
export class PaginationModule { }