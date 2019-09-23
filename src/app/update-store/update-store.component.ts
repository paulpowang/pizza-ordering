import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
 
import { Store } from '../models/store';
import { StoreService } from '../services/store.service';
 
@Component({
  selector: 'app-update-store',
  templateUrl: './update-store.component.html',
  styleUrls: ['./update-store.component.css']
})
export class UpdateStoreComponent implements OnInit {
  @Input() store: Store;
 
  submitted = false;
  deleted = false;
 
  constructor(
    private route: ActivatedRoute,
    private storeService: StoreService,
    private router: Router
  ) {}
 
  ngOnInit() {
    this.getStore();
  }

  getStore(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.storeService.getStore(id)
    .subscribe(store=> this.store = store);
  }
 
  newStore(): void {
    this.submitted = false;
  }

  updateStore() {

    this.storeService.updateStore(this.store.storeId,
      { storeName: this.store.storeName, city: this.store.city, 
        state: this.store.state, zipCode: this.store.zipCode })
      .subscribe(
        data => {
          console.log(data);
          this.store = data as Store;
          this.submitted = true;
        },
        error => console.log(error));
        this.store= new Store();
  }
  
  onSubmit() {
    this.updateStore();
  }

  delete()
  {
    this.storeService.deleteStore(this.store.storeId)
      .subscribe(
        data => {
          console.log(data);
        },
        error => console.log('ERROR: ' + error));

    this.deleted = true;
  }

  navigateToStore()
  {
    this.router.navigate(['/stores/store']);
    this.deleted = false;
  }
}