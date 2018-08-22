import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Item} from './item';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  urlItems = '/api/items';

  constructor(private http: HttpClient) {
  }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.urlItems}/all`);
  }

  getItemsByBrand(brand: string): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.urlItems}/all/brand/${brand}`);
  }

  getItemsByColor(color: string): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.urlItems}/all/color/${color}`);
  }

  getItemsBySize(size: string): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.urlItems}/all/size/${size}`);
  }

  getItemsByPrice(price: number): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.urlItems}/all/price/${price}`);
  }

  getItemsByName(name: string): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.urlItems}/all/search/${name}`);
  }

  getItem(id: number): Observable<Item> {
    return this.http.get<Item>(`${this.urlItems}/${id}`);
  }

}
