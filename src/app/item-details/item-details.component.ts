import { Component, OnInit } from '@angular/core';
import {ItemsService} from '../items.service';
import {Item} from '../item';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../user';
import {UsersService} from '../users.service';
import {Login} from '../login';
import {LoginsService} from '../logins.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  item: Item = null;
  owner: User = null;
  login: Login = null;

  constructor(private itemsService: ItemsService,
              private usersService: UsersService,
              private loginsService: LoginsService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.getLogin();
    this.route.paramMap.subscribe(result => {
      const id = +result.get('id');
      this.getItem(id);
    });
  }

  getItem(id: number) {
    this.itemsService.getItem(id).subscribe(result => {
      this.item = result;
      this.getOwner(this.item.owner);
    });
  }

  getOwner(user: string) {
    this.usersService.getUser(user).subscribe(result => this.owner = result);
  }

  goToReviewView() {
    this.router.navigate([`/users/${this.owner.id}`]);
  }

  getLogin() {
    this.loginsService.getLogin().subscribe(result => this.login = result);
  }

  getThisItem() {
    alert('You have gotten the item succesfully!');
  }

}
