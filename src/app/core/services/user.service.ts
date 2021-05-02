import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { User } from '../../shared/models/user';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAllUsers() {
        return this.http.get<User[]>(`${environment.apiUrl}/users`);
    }


    getUser(id: string) {
        return this.http.get<User[]>(`${environment.apiUrl}/users/${id}`);
    }
}