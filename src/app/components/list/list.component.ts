import { Component, Input, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../Task';
import { List } from '../../List';
@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
	@Input() list: List
	constructor(private taskService: TaskService) { }
	ngOnInit(): void {
		this.taskService.getTasks(this.list.id).subscribe(tasks => {
			return this.list = { 
				...this.list, 
				tasks: tasks.filter(t => t.archive == (false || null))
			}
		});
	}
	onToggle(task: any){
		console.log(task);
	}
}
