import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PostService} from '../services/post.service';
import {Router} from '@angular/router';
import {Post} from '../models/Post';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  formPost : FormGroup;

  constructor(private formBuilder : FormBuilder,
              private postService : PostService,
              private router : Router) {}


  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.formPost = this.formBuilder.group({
      title : ['',Validators.required],
      content : ['' , Validators.required]
    })
  }

  savePost(){
    const title = this.formPost.get('title').value;
    const content = this.formPost.get('content').value;
    this.postService.addPost(new Post(title, content));
    this.router.navigate(['/posts']);
  }

}
