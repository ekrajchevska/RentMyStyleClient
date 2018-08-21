import {Item} from './item';
import {Review} from '../review';

export class User {

  id: string;
  name: string;
  items: Item[];
  reviews: Review[];

  constructor(id: string, name: string, items: Item[], reviews: Review[]) {
    this.id = id;
    this.name = name;
    this.items = items;
    this.reviews = reviews;
  }
}
