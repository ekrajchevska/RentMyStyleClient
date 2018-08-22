import { Component, OnInit } from '@angular/core';
import {Login} from '../login';
import {Item} from '../item';
import {LoginsService} from '../logins.service';
import {ItemsService} from '../items.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  login: Login = null;
  items: Item[] = [];

  constructor(private loginsService: LoginsService,
              private itemsService: ItemsService) { }

  ngOnInit() {
    this.getLogin();
    this.getAllItems();
  }


  getLogin() {
    this.loginsService.getLogin().subscribe(result => this.login = result);
  }

  getAllItems() {
    this.itemsService.getItems().subscribe(res=> this.items = res);
  }

  getItemsByName(name: string){
    this.itemsService.getItemsByName(name).subscribe(res=> this.items = res);
  }

  getItemsByBrand(brand: string){
    this.itemsService.getItemsByBrand(brand).subscribe(res=> this.items = res);
  }

  getItemsByColor(color: string){
    this.itemsService.getItemsByColor(color).subscribe(res=> this.items = res);
  }

  getItemsBySize(size: string){
    this.itemsService.getItemsBySize(size).subscribe(res=> this.items = res);
  }

  getItemsByPrice(price: number){
    this.itemsService.getItemsByPrice(price).subscribe(res=> this.items = res);
  }



}
