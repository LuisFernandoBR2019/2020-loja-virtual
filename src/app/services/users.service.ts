import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { UsersModel } from 'src/app/models/users.model';
import { APP_API } from 'src/app/app.api';

@Injectable()
export class UsersService{
    constructor(private  http:HttpClient){}

    getUsers(): Observable<UsersModel []>{
        
        let endpoint : string = `${APP_API}/users`

        return this.http.get<UsersModel[]>(endpoint)
    }
}