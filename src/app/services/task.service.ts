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
	private server = "http://localhost:5000";
	private server2 = "https://dev.malikdunston.com/credentials/";
	private server3 = "https://dev.malikdunston.com/data/digitalsignage/api";
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
	getMalikDunstonApiCredentials(): Observable<any>{
		// const url = `${this.server2}`;
		// const params = new HttpParams().append("data_credentials", "uniwatch");
		const url = `${this.server3}`;
		const params = new HttpParams().append("institution", "tech");
		return this.http.get<any>(url,{headers, params})
	}
}
