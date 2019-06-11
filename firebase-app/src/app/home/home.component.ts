import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Item } from '../models/item.model';
import { HttpService } from '../http/http.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  items: Item[] = [];
  subscription: Subscription;

  constructor(private httpService: HttpService,
              private auth: AuthService) { }

  ngOnInit() {
     this.subscription = this.httpService.itemsChanged.subscribe(
      (items: Item[]) => {
        this.items = items;
      }
    );
    this.httpService.getItems();  
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  logout(){
    this.auth.logout();
  }

  onDelete(key: string){
    this.httpService.deleteItem(key);
    this.items = this.items.filter(item => item.id != key);
  }

}
