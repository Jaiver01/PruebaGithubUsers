import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class UsersService {

	private url = 'https://api.github.com';

	constructor(private http: HttpClient) { }

	public getUsers = (filter: string): Observable<any[]> => {
		return this.http.get<any[]>(`${this.url}/search/users?q=${encodeURIComponent(filter)}&per_page=10`);
	}

	public getUser = (login: string): Promise<any> => {
		return new Promise((resolve, reject) => {
			this.http.get<any[]>(`${this.url}/users/${encodeURIComponent(login)}`).subscribe((user) => {
				resolve(user);
			});
		});
	}
}
