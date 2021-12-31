import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../Task';
const httpOptions = {
	headers: new HttpHeaders({
		"Content-Type": "application/json"
	})
}
@Injectable({
	providedIn: 'root'
})
export class TaskService {
	private url = "http://localhost:5000"
	constructor(private http:HttpClient) { }
	getTasks(): Observable<Task[]> {
		const newUrl = `${this.url}/tasks`;
		return this.http.get<Task[]>(newUrl);
	}
	archiveTask(task: Task): Observable<Task[]>{
		const archive = `${this.url}/archivedTasks`;
		console.log(task);
		return this.http.post<Task[]>(archive, task);
	}
	deleteTask(task: Task): Observable<Task[]>{
		const allTasks = `${this.url}/tasks/${task.id}`;
		this.http.delete<Task[]>(allTasks);
		return this.getTasks();
	}
	updateTaskReminder(task: Task): Observable<Task[]>{
		const allTasks = `${this.url}/tasks/${task.id}`;
		return this.http.put<Task[]>(allTasks, task, httpOptions)
	}
	addTask(task: Task): Observable<Task>{
		const allTasks = `${this.url}/tasks`;
		return this.http.post<Task>(allTasks, task, httpOptions)
	}
}
