import { Component } from "@angular/core";
import {MatToolbarModule} from "@angular/material/toolbar"

@Component({
	selector: 'fe-mean-app-header',
	templateUrl: './header.component.html',
	standalone: true,
	imports: [
		MatToolbarModule,
	]
})
export class HeaderComponent {

}