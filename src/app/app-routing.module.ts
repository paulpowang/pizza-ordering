import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
import { StoresListComponent } from './stores-list/stores-list.component';
import { CreateStoreComponent } from './create-store/create-store.component';
import { SearchStoresComponent } from './search-stores/search-stores.component';
import { UpdateStoreComponent } from './update-store/update-store.component';
 
const routes: Routes = [
  { path: '', redirectTo: 'store', pathMatch: 'full' },
  { path: 'store', component: StoresListComponent },
  { path: 'add', component: CreateStoreComponent },
  { path: 'findbyzipcode', component: SearchStoresComponent },
  { path: 'update', component: UpdateStoreComponent },
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }