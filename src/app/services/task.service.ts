import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../Task';
import { List } from '../List';
const httpOptions = {
	headers: new HttpHeaders({
		"Content-Type": "application/json"
	})
}
@Injectable({
	providedIn: 'root'
})
export class TaskService {
	private server = "http://localhost:5000"
	lists: List[] = [];
	tasks: Task[] = [];
	constructor(private http:HttpClient) {}
	getTasks(): Observable<Task[]>{
		const url = `${this.server}/tasks`
		return this.http.get<Task[]>(url)
	}
	getLists(): Observable<List[]>{
		const url = `${this.server}/lists`
		return this.http.get<Task[]>(url)
	}
	getData(){
		const Lists = this.getLists();
		const Tasks = this.getTasks();
		return {
			tasks: Tasks,
			lists: Lists
		}
	}
}
