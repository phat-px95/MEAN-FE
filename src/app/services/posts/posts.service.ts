import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject, tap } from "rxjs";
import { Post } from "src/app/models/post.type";
const API_URL = 'http://localhost:3333/api/posts';
@Injectable({providedIn: 'root'})
export class PostService {
	private posts: Post[] = [];
	private postsUpdated = new Subject<Post[]>();

	constructor(private httpClient: HttpClient) {}

	getPosts(): Observable<Post[]> {
		return this.httpClient.get<Post[]>(API_URL).pipe(tap(res => {
			this.posts = res;
			this.postsUpdated.next([...this.posts]);
		}));
	}

	getPostUpdatedListener() {
		return this.postsUpdated.asObservable();
	}

	addPost(post: Post) {
		return this.httpClient.post<{message: string}>(API_URL, post).pipe(tap(res => {
			if (res) {
				this.posts.push(JSON.parse(JSON.stringify(post)));
				this.postsUpdated.next([...this.posts]);
			}
		}));
	}
}