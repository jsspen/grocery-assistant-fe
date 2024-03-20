import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddGroceriesComponent } from './components/add-groceries/add-groceries.component';
import { GroceriesDetailsComponent } from './components/groceries-details/groceries-details.component';
import { GroceriesListComponent } from './components/groceries-list/groceries-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddGroceriesComponent,
    GroceriesDetailsComponent,
    GroceriesListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
