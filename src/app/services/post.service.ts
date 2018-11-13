import { Injectable } from '@angular/core';
import {Post} from '../models/Post';
import {Subject} from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  postSubject = new Subject<Post[]>();
  posts : Post[] = [];

  constructor() {}

  emitPost(){
    this.postSubject.next(this.posts);
  }

  addPost(post : Post){
    post.loveIts = 0;
    this.posts.push(post);
    this.emitPost();
  }

  removePost(index : number){
    this.posts.splice(index, 1);
    this.emitPost();
  }
}
