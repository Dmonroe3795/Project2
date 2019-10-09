import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { course } from '../models/course';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router, private course : CourseService, private global :GlobalService) { 
    // this.displayUserCourses();
  }

  ngOnInit() {
    this.displayUserCourses();

  }

  allCoursesObs : Observable<course[]> = this.course.getUserCourses(2);
  allUserCourses : course[] = [];

  displayUserCourses() {
    this.allCoursesObs.subscribe(
      (response) => {
        console.log(response)
        this.allUserCourses = response;
      },
      (response) => {

      }
      // finally?
    )
  }
}
