import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
@Component({
	selector: 'app-archive',
	templateUrl: './archive.component.html',
	styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {
	archivedTasks: any[]
	constructor(private taskService: TaskService) { }
	ngOnInit(): void {
		this.taskService.getArchivedTasks().subscribe(tasks => this.archivedTasks = tasks);
	}
}
