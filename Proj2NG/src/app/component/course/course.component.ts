import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';
import { Observable } from 'rxjs';
import { course } from '../models/course';
// import { note } from '../models/note';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})

export class CourseComponent implements OnInit {

  constructor(private course : CourseService) { }

  ngOnInit() {
  }

  userId : number = 2;

  allCoursesObs : Observable<course[]> = this.course.getUserCourses(this.userId);
  allUserCourses : course[] = [];

  displayUserCourses() {
    console.log("subscribe")
    this.allCoursesObs.subscribe(
      (response) => {
        console.log(response);
        this.allUserCourses = response;
      },
      (response) => {

      }
      // finally?
    )
  }
}
