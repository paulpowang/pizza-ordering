import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoresListComponent } from './stores-list/stores-list.component';
import { CreateStoreComponent } from './create-store/create-store.component';
import { SearchStoresComponent } from './search-stores/search-stores.component';
import { UpdateStoreComponent } from './update-store/update-store.component';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
