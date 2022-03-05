import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/services/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: Post[] = [];

  constructor(private postService: PostsService, private router: Router) { }


  ngOnInit(): void {
    this.postService.getPosts().subscribe(posts => this.posts = posts)
  }

  goToCommentsPage(id: number){
    console.log(id)
    this.router.navigateByUrl("/posts/" + id + "/comments")
  }
}
