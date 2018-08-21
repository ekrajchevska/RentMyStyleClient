
export class Review {

  id: number;
  description: string;
  author: string;
  userAbout: string;

  constructor(id: number, description: string, author: string, userAbout: string) {
    this.id = id;
    this.description = description;
    this.author = author;
    this.userAbout = userAbout;
  }
}
