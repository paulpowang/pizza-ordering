import { Component, OnInit, Input } from '@angular/core';
 
import { StoreService } from '../services/store.service';
import { Store } from '../models/store';



@Component({
  selector: 'app-store-details',
  templateUrl: './store-details.component.html',
  styleUrls: ['./store-details.component.css']
})
export class StoreDetailsComponent implements OnInit {
  @Input() store: Store;
 
  constructor(private storeService: StoreService, ) {}
 
  ngOnInit(){}
}