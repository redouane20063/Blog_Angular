import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewPostComponent } from './new-post/new-post.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import {PostListComponent} from './post-list/post-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {PostService} from './services/post.service';

const appRoute : Routes = [
  {path : 'posts', component : PostListComponent},
  {path : 'new' , component : NewPostComponent},
  {path : '' , component : PostListComponent},
  {path : '**' , component : PostListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    NewPostComponent,
    PostListItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
