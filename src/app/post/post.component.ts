import { AppError } from './../common/app-error';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { NotFoundError } from '../common/not-found-error';
import { BadDataError } from '../common/bad-data-error';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts: any [];
  constructor(private service: PostService) { }

   ngOnInit() {
    this.service.getAll()
    .subscribe(
    posts => this.posts = posts);
  }

   createPost(newPost: HTMLInputElement) {
     const post = {title: newPost.value};
     this.posts.splice(0, 0, post);

     newPost.value = '';

      this.service.create(newPost)
      .subscribe(
      aPost => {
        post['id'] = aPost.id;
      },
      (error: AppError) => {
        this.posts.splice(0, 1);
        
        if (error instanceof BadDataError) {
          // this.form.setErrors(error.originalError);
        } else {
          throw error;
        }
      });
   }

   updatePost(post) {
    this.service.update(post)
    .subscribe(
    status => {
      console.log(status);
    });
   }

   deletePost(post) {
    const index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

     this.service.delete(post.id)
     .subscribe(
      null,
      (error: AppError) => {
        this.posts.splice(index, 0, post);

        if (error instanceof NotFoundError) {
          alert('this post has already been deleted');
        } else {
          throw error;
        }
    });
   }
}
