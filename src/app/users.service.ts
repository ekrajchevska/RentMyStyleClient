import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from '../../node_modules/rxjs';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import {User} from './user';


@Injectable({
  providedIn: 'root'
})

export class UsersService {

  urlUser = '/api/users/'

  constructor(private http: HttpClient) { }

  getUser(user: string): Observable<User> {
    return this.http.get<any>(`${this.urlUser}${user}`).pipe(map(obj => new User(obj.id, obj.name, obj.itemsToGive, obj.reviewsForUser)));
  }

}
