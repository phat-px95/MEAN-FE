import { Component} from "@angular/core";
import { FormsModule, NgForm } from "@angular/forms";
import { MatFormField } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { Post } from "src/app/models/post.type";
import { CommonModule } from "@angular/common";
import { PostService } from "src/app/services/posts/posts.service";

@Component({
	selector: 'fe-mean-post-create',
	templateUrl: './post-create.component.html',
	styleUrl: './post-create.component.css',
	standalone: true,
	imports: [
		CommonModule,
		FormsModule,
		MatFormField,
		MatInputModule,
		MatCardModule,
		MatButtonModule
	]
})
export class PostCreateComponent {
	enteredTile = '';
	enteredContent = '';
	newPost = '';

	constructor(private postService: PostService) {}
	onAddPost(form: NgForm): void {
		if (!form.invalid) {
			const post: Post = {
				title: form.value.title,
				content: form.value.content,
			};
			this.postService.addPost(post);
			form.resetForm();
		}
	}
}