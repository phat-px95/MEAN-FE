import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { HeaderComponent } from './header/header.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { Post } from './models/post.type';

@Component({
  standalone: true,
  imports: [
    NxWelcomeComponent,
    RouterModule,
    PostCreateComponent,
    HeaderComponent,
    PostListComponent
    
  ],
  selector: 'fe-mean-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'fe-mean';
  storedPosts = [] as Array<Post>;

  onPostAdded (post: Post) {
    this.storedPosts.push(post);
  }
}
