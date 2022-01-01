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
	lists: any[] = [];
	tasks: any[] = [];
	constructor(
		private taskService: TaskService
	) {}
	ngOnInit(): void {
		this.taskService.getTasks().subscribe(tasks => this.tasks = tasks)
		this.taskService.getLists().subscribe(lists => {
			let Lists = lists;
			this.lists = Lists.map(list => {
				return {...list, tasks: this.tasks.filter(t => t.list == list.id)}
			})
		})
	}
}
