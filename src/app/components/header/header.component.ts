import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	title: string = 'Task Tracker App';
	constructor() { }
	ngOnInit(): void { // like compdidmount or useeffect...
		// console.log(this);
		// good place to place http reqs...
	}
}
