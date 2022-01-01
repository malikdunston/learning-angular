import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../Task';
import { List } from '../List';
const headers = new HttpHeaders({
	"Content-Type": "application/json"
})
@Injectable({
	providedIn: 'root'
})
export class TaskService {
	private server = "http://localhost:5000"
	constructor(private http:HttpClient) {}
	getTasks(listId: number|null): Observable<Task[]>{
		const url = `${this.server}/tasks`;
		if (listId == null) return this.http.get<Task[]>(url,{headers})
		const params = new HttpParams().append("list", listId);
		return this.http.get<Task[]>(url,{headers, params})
	}
	getArchivedTasks(): Observable<Task[]>{
		const url = `${this.server}/tasks`;
		const params = new HttpParams().append("archive", true);
		return this.http.get<Task[]>(url,{headers, params})
	}
	getLists(): Observable<List[]>{
		const url = `${this.server}/lists`
		return this.http.get<List[]>(url)
	}
}
