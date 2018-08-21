import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Login} from '../login';
import {ItemsService} from '../items.service';
import {Item} from '../item';
import {LoginsService} from '../logins.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  login: Login = null;
  items: Item[] = [];

  constructor(private router: Router,
              private loginsService: LoginsService,
              private itemsService: ItemsService) { }

  ngOnInit() {
    this.getLogin();
    this.getItems();
  }


  goToSearchView() {
    if (this.login) {
      this.router.navigate(['/search']);
    } else {
      this.router.navigate(['/login']);
    }
  }

  goToItemDetailsView(id: number) {
    if (this.login) {
      this.router.navigate([`/item-details/${id}`]);
    } else {
      this.router.navigate(['/login']);
    }
  }

  getLogin() {
    this.loginsService.getLogin().subscribe(result => this.login = result);
  }

  getItems() {
    this.itemsService.getItems().subscribe(result => this.items = result);
  }
}
