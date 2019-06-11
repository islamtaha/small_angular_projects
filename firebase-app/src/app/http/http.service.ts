import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../models/item.model';
import { Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { TokenService } from '../auth/token.service';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  items: Item[] = [];
  itemsChanged = new Subject<Item[]>();

  constructor(private httpClient: HttpClient,
              private toastr: ToastrService,
              private tokenService: TokenService) { }

  getItems(){
    const token = this.tokenService.getToken();
    this.httpClient.get(environment.firebase.databaseURL+'/items.json?auth='+token)
    .subscribe(
      (response: Response) => {
        let items: Item[] = [];
        for (let key in response) {
          const item = new Item(key, response[key].name, response[key].price);
          items.push(item);
        }
        console.log(items);
        this.items = items;
        this.itemsChanged.next(items);
      }
    );
  }

  addItem(item: Item){
    const token = this.tokenService.getToken();
    const headers = {}
    this.httpClient.post(environment.firebase.databaseURL+'/items.json?auth='+token, item)
    .subscribe(
      resp => {
        console.log(resp);
        this.toastr.success('Submitted Successfully', 'Item Added');
      }
    );
  }

  deleteItem(key: string){
    const token = this.tokenService.getToken();
    this.httpClient.delete(environment.firebase.databaseURL+'/items/'+key+'.json?auth='+token)
    .subscribe(
      resp => {
        console.log(resp);
        this.toastr.success('Deleted Successfully', 'Item Deleted');
      }
    );
  }
  
}
