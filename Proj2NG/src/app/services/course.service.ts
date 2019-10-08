import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { course } from '../component/models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http : HttpClient) {}

  getUserCourses(id : number) : Observable<course[]> {
    let head = new HttpHeaders({ 'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'});
    let options =  {headers: head}

    return this.http.get<course[]>("http://localhost:9090/courses/users/" + id, options);
  }
}
