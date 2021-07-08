import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';


@Injectable({ providedIn: 'root' })
export class  MyProfileService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<any[]>(`/getallmyProfile`);
    }

    addData(data: any) {
        return this.http.post(`/myprofile/add`, data);
    }

   
}