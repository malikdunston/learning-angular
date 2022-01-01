import { Component, Input, OnInit } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-task',
	templateUrl: './task.component.html',
	styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
	@Input() task: any;
	faTrash = faTrash
	constructor() { }
	ngOnInit(): void {
	}
	onDelete(task: Task){
		// this.onDeleteTask.emit(task);
	}
	onToggle(task: Task){
		// this.onToggleReminder.emit(task);
	}
}
