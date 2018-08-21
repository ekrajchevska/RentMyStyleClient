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
    this.getItems();
  }


  getLogin() {
    this.loginsService.getLogin().subscribe(result => this.login = result);
  }

  getItems() {
    //  this is the way all work, except that price is NUMBER !!!
    this.itemsService.getItemsBySize('M').subscribe(result => this.items = result);
  }
}
