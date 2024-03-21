import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { AddItemComponent } from './components/add-item/add-item.component';

const routes: Routes = [
  { path: '', redirectTo: 'items', pathMatch: 'full' },
  { path: 'items', component: ItemListComponent },
  { path: 'items/:id', component: ItemDetailsComponent },
  { path: 'add', component: AddItemComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
