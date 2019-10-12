import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { course } from '../component/models/course';
import { GlobalService } from './global.service';
import { user } from '../component/models/user';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient, private global: GlobalService) { }

  getUserCourses(u: user): Observable<course[]> {
    let head = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
    let options = { headers: head }
    let url = "http://ec2-54-89-99-128.compute-1.amazonaws.com:8888/courses";


    // let url = "http://localhost:9090/courses";

    if (u.isInstructor) {
      url += "/trainers/";
    } else {
      url += "/users/";
    }
    return this.http.get<course[]>(url + u.id, options);
  }

  createCourse(course: course): Observable<course> {
    let head = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
    let options = { headers: head }
    let body = JSON.stringify(course);
    console.log(body)
    return this.http.post<course>("http://ec2-54-89-99-128.compute-1.amazonaws.com:8888/courses", body, options);
  }

  updateCourse(course: course): Observable<course> {
    let head = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
    let options = { headers: head }
    let body = JSON.stringify(course);
    return this.http.put<course>("http://ec2-54-89-99-128.compute-1.amazonaws.com:8888/courses", body, options);
  }

  getUsersNotInCourse(id: number): Observable<user[]> {
    let head = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
    let options = { headers: head }

    return this.http.get<user[]>("http://ec2-54-89-99-128.compute-1.amazonaws.com:8888/users/courses/" + id + "/not", options);
  }
}
