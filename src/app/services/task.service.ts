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
	lists: (number|string)[] = [11, 2, "apple"];
	constructor(private http:HttpClient) { }
	getLists(): Observable<List[]> {
		const url = `${this.server}/lists`;
		return this.http.get<List[]>(url);
	}
}
