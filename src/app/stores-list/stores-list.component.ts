import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
 
import { StoreService } from '../store.service';
import { Store } from '../store';
 
@Component({
  selector: 'app-stores-list',
  templateUrl: './stores-list.component.html',
  styleUrls: ['./stores-list.component.css']
})
export class StoresListComponent implements OnInit {
 
  stores: Observable<Store[]>;
 
  constructor(private storeService: StoreService) { }
 
  ngOnInit() {
    this.reloadData();
  }
 
  deleteStores() {
    this.storeService.deleteAll()
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log('ERROR: ' + error));
  }
 
  reloadData() {
    this.stores = this.storeService.getStoresList();
  }
}