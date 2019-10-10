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

    return this.http.get<course[]>("http://ec2-54-89-99-128.compute-1.amazonaws.com:8888/courses/users/" + id, options);
  }

  updateCourse(course: course) : Observable<course> {
    console.log("service")
    console.log(course);
    let head = new HttpHeaders({ 'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'});
    let options =  {headers: head}
    let body = JSON.stringify(course);
    // return this.http.put<course>("http://localhost:9090/courses", body, options);
    return this.http.put<course>("http://ec2-54-89-99-128.compute-1.amazonaws.com:8888/courses", body, options);
  }
}
