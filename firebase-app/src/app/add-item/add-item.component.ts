import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http/http.service';
import { Item } from '../models/item.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  errorFlag = false;
  addItemForm = new FormGroup({
    'name': new FormControl(null, Validators.required),
    'price': new FormControl(null, Validators.required)
  });

  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }

  onAddItem(){
    if(this.addItemForm.valid) {
      this.httpService.addItem(new Item(null, this.addItemForm.value.name, this.addItemForm.value.price));
      this.addItemForm.reset();
      this.errorFlag = false;
    }else{
      this.errorFlag = true;
    }
  }

}
