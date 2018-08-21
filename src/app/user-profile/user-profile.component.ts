import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {UsersService} from '../users.service';
import {Login} from '../login';
import {LoginsService} from '../logins.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  login: Login;
  user: User;

  httpOptionsJson = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  httpOptionsFile = {
    headers: new HttpHeaders({
      'Content-Type':  'multipart/form-data',
      'Authorization': 'my-auth-token'
    })
  };



  constructor(private loginsSerivce: LoginsService,
              private usersService: UsersService,
              private http: HttpClient) {}

  ngOnInit() {
    this.getLogin();
  }

  getLogin() {
    this.loginsSerivce.getLogin().subscribe(res => {
      this.login = res;
      this.getUser();
    });
  }

  getUser() {
    this.usersService.getUser(this.login.id).subscribe(res => this.user = res);
  }


  addItem(itemName: string, itemBrand: string, itemColor: string,
          itemPrice: string, itemSize: string, itemPhoto: string) {

    if (itemName === '' || undefined === itemPhoto) {
      return;
    }

    console.log(itemPhoto);
    const parts = itemPhoto.split('\\');
    const imgAddress = parts[2];
    console.log('img address: ' + imgAddress);

    this.http.post('api/file', 'file', this.httpOptionsFile);

    console.log('ItemName: ' + itemName);
    const objBody = {
      'name': itemName,
      'brand': itemBrand,
      'color': itemColor,
      'price': itemPrice,
      'size': itemSize,
      'image': imgAddress,
      'owner': this.login.id
    };

    this.http.post('api/items/post', objBody, this.httpOptionsJson).subscribe();
  }

  openForm() {
    document.getElementById('uploadFile').style.display = 'block';
  }

  closeForm() {
    document.getElementById('uploadFile').style.display = 'none';
  }
}
