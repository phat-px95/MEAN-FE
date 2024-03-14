import { CommonModule } from "@angular/common";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import {MatExpansionModule} from '@angular/material/expansion'
import { ReplaySubject, takeUntil } from "rxjs";
import { Post } from "src/app/models/post.type";
import { PostService } from "src/app/services/posts/posts.service";

@Component({
	selector: 'fe-mean-app-post-list',
	templateUrl: './post-list.component.html',
	styleUrl: './post-list.component.css',
	imports: [
		FormsModule,
		CommonModule,
		MatExpansionModule,
		MatButtonModule
	],
	standalone: true,
})
export class PostListComponent implements OnInit, OnDestroy {
	posts: Post[] = [];
	destroyed$ = new ReplaySubject<void>(1);

	constructor(private postService: PostService) {}

	ngOnInit(): void {
		this.posts = this.postService.getPosts();
		this.postService.getPostUpdatedListener()
			.pipe(
				takeUntil(this.destroyed$)
			)
			.subscribe(posts => {
				this.posts = posts;
			});
	}

	ngOnDestroy(): void {
		this.destroyed$.next();
		this.destroyed$.complete();
	}
}