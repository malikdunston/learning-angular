import { Component, Input, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { List } from '../../List';
import { Task } from '../../Task';
@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
	@Input() list: List
	constructor(private taskService: TaskService) { }
	ngOnInit(): void {
		this.taskService.getTasks(this.list.id).subscribe(tasks => this.list = { ...this.list, tasks: tasks});
	}
}
