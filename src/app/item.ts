export class Item {

  id: number;
  name: string;
  brand: string;
  color: string;
  price: number;
  size: string;
  image: string;
  owner: string;

  constructor(id: number, name: string, brand: string, color: string, price: number, size: string, image: string, owner: string) {
    this.id = id;
    this.name = name;
    this.brand = brand;
    this.color = color;
    this.price = price;
    this.size = size;
    this.image = image;
    this.owner = owner;
  }
}
