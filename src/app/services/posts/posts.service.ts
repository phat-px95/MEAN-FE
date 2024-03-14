import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Post } from "src/app/models/post.type";

@Injectable({providedIn: 'root'})
export class PostService {
	private posts: Post[] = [];
	private postsUpdated = new Subject<Post[]>();

	getPosts() {
		return [...this.posts];
	}

	getPostUpdatedListener() {
		return this.postsUpdated.asObservable();
	}

	addPost(post: Post) {
		this.posts.push(JSON.parse(JSON.stringify(post)));
		this.postsUpdated.next([...this.posts]);
	}
}