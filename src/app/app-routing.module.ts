import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoresListComponent } from './stores-list/stores-list.component';
import { CreateStoreComponent } from './create-store/create-store.component';
import { SearchStoresComponent } from './search-stores/search-stores.component';
import { UpdateStoreComponent } from './update-store/update-store.component';
<<<<<<< HEAD
import { StoresPageComponent } from './stores-page/stores-page.component';
import { FoodItemFormComponent } from './food-item-form/food-item-form.component';

const routes: Routes = [
  {
    path: 'stores',
    component: StoresPageComponent,
    children: [
      { path: 'store', component: StoresListComponent },
      { path: 'add', component: CreateStoreComponent },
      { path: 'findbyzipcode', component: SearchStoresComponent },
      { path: 'store/:id', component: UpdateStoreComponent },
    ],
  },
  {
    path: 'foodItems',
    component: FoodItemFormComponent,
  },
=======

import { FoodItemsFormComponent } from './food-items-form/food-items-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'store', pathMatch: 'full' },
  { path: 'store', component: StoresListComponent },
  { path: 'add', component: CreateStoreComponent },
  { path: 'findbyzipcode', component: SearchStoresComponent },
  { path: 'update', component: UpdateStoreComponent },
  { path: 'pickFood', component: FoodItemsFormComponent },
>>>>>>> 0505871889fb0733ab465e0019d107c86ad6570d
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
