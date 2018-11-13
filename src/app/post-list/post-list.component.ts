import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Post} from '../models/Post';
import {Subscription} from 'rxjs/index';
import {PostService} from '../services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {

  subscriptionPost : Subscription;

  arrayPost : Post[] = [
    new Post(
      'title1',
      'quid multos tamen sunt illum duis multos dolor quorum malis'
    ),
    new Post(
      'title2',
      'noster cillum ipsum malis malis quid aute quae aliqua magna'
    ),
    new Post(
      'title3',
      'veniam nulla quis cillum culpa labore labore nulla malis malis'
    )
  ];

  constructor(private postService : PostService) { }

  ngOnInit() {
    this.subscriptionPost = this.postService.postSubject.subscribe(
      (data : Post[]) => {
        this.arrayPost = data;
      }
    );
    this.postService.emitPost();
  }



  ngOnDestroy(){
    this.subscriptionPost.unsubscribe();
  }



}
