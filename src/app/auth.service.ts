import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    baseUrl: string = environment.apiUrl;

    constructor(private http: HttpClient){}

    login = (email:string , password: string) => {
        return this.http.post(`${this.baseUrl}userLogin`,{email_id: email, password});
    }
}