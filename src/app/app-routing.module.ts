import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroceriesListComponent } from './components/groceries-list/groceries-list.component';
import { GroceriesDetailsComponent } from './components/groceries-details/groceries-details.component';
import { AddGroceriesComponent } from './components/add-groceries/add-groceries.component';

const routes: Routes = [
  { path: '', redirectTo: 'groceries', pathMatch: 'full' },
  { path: 'groceries', component: GroceriesListComponent },
  { path: 'groceries/:id', component: GroceriesDetailsComponent },
  { path: 'add', component: AddGroceriesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
