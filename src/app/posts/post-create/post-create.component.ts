import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatFormField } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";

@Component({
	selector: 'fe-mean-post-create',
	templateUrl: './post-create.component.html',
	styleUrl: './post-create.component.css',
	standalone: true,
	imports: [
		FormsModule,
		MatFormField,
		MatInputModule,
		MatCardModule,
		MatButtonModule
	]
})
export class PostCreateComponent {
	enteredValue = '';
	newPost = '';
	onAddPost() {
		this.newPost = this.enteredValue;
	}
}