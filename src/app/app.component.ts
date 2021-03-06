import { Component } from '@angular/core';
import { TaskService } from './services/task.service';
import { List } from './List';
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	lists: List[] = [];
	constructor(private taskService: TaskService) {}
	ngOnInit(): void {
		this.taskService.getLists().subscribe(lists => this.lists = lists);
		this.taskService.getMalikDunstonApiCredentials().subscribe(data => console.log(data));
	}
}
