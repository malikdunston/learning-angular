import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	title: string = 'Task Tracker App';
	showAddTask: boolean = false;
	subscription: Subscription;
	constructor(private uiService:UiService, private router:Router) { 
		this.subscription = this.uiService
			.onToggle()
			.subscribe((value) => (this.showAddTask = value))
	}
	ngOnInit(): void { // like compdidmount or useeffect...
		// console.log(this.router);
		// good place to place http reqs...
	}
	toggleAddTask(): void{
		this.uiService.toggleAddTask();
	}
	hasRoute(route: string){
		return this.router.url === route;
	}
}
