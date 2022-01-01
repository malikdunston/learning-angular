import { Component } from '@angular/core';
import { TaskService } from './services/task.service';
import { Task } from './Task';
import { List } from './List';
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	lists: List[] = [];
	newList: any[] = [];
	constructor(private taskService: TaskService) { }
	ngOnInit(): void {
		this.taskService.getLists().subscribe((lists)=>this.lists = lists);
		this.newList = this.taskService.lists;
	}
}
