import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
	name = 'Angular'
	title = 'Tour of heroes';
	hero1 = 'windstorm';

	hero: Hero = {
		  id: 1,
		  name: 'Windstorm2'
		};
}

export class Hero {
  id: number;
  name: string;
}