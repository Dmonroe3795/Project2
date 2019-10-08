import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { user } from '../component/models/user';
@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http : HttpClient) { }
  createAccount(u: user):Observable<user>{
 
    let head = new HttpHeaders({ 'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'});
    let options =  {headers: head}
    let body = JSON.stringify(u);
    return this.http.post<user>("ec2-54-89-99-128.compute-1.amazonaws.com:8888/users",body,options);
  }
  login(u:user):Observable<user>{
    let head = new HttpHeaders({ 'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'});
    let options =  {headers: head}
    let body = JSON.stringify(u);
    return this.http.post<user>("ec2-54-89-99-128.compute-1.amazonaws.com:8888/users",body,options);
  }
}
