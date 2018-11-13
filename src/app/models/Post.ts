export class Post {
  public loveIts: number = 0;
  public created_at: Date = new Date();

  constructor(public title : string, public content : string){}
}
