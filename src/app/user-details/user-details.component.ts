import { Component, OnInit } from '@angular/core';
import {Login} from '../login';
import {User} from '../user';
import {LoginsService} from '../logins.service';
import {UsersService} from '../users.service';
import {ActivatedRoute} from '@angular/router';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  login: Login;
  user: User;
  userToReview: User;

  httpOptionsJson = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  constructor(private loginsSerivce: LoginsService,
              private usersService: UsersService,
              private route: ActivatedRoute,
              private http: HttpClient) {}

  ngOnInit() {
    this.getLogin();
    this.getUserToReview();
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

  getUserToReview() {

    this.route.paramMap.subscribe(result => {
      const id = result.get('id');
      this.usersService.getUser(id).subscribe(user => {
        this.userToReview = user;
      });
    });
  }

  openForm() {
    document.getElementById('uploadReview').style.display = 'block';
  }

  closeForm() {
    document.getElementById('uploadReview').style.display = 'none';
  }

  addReview(userReview: string) {
    console.log('Review added!');

    if (userReview === undefined) {
      return;
    }

    const objBody = {
      'description': userReview,
      'author': this.login.id,
      'userAbout': this.userToReview.id,
    };

    this.http.post('api/reviews/post', objBody, this.httpOptionsJson).subscribe();

  }

}
