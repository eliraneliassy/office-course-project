import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {PostsService} from "./posts.service";
import {Post} from "./post.interface";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // providers: []
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, OnDestroy{

  posts$: Observable<Post[]>;
  // subscription: Subscription;

  constructor(private postsService: PostsService, private cdr: ChangeDetectorRef) {
    // this.subscription =
    //   this.postsService.getPosts().subscribe((posts: Post[]) => {
    //     this.posts = posts;
        // this.cdr.detectChanges();
        // this.cdr.markForCheck();
      // });
    this.posts$ = this.postsService.getPosts();


  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
  }



}
