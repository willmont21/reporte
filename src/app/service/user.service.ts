import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from '@angular/router';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private URL = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }


  signIn(user: { nombre: string; pass: string; }) {
    return this.http.post<any>(this.URL + 'login', user);
  }
}
