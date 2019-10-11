import { Component, OnInit, SimpleChange, SimpleChanges, Input } from '@angular/core';
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
  ngOnChanges(changes: SimpleChanges){
    this.displayUserCourses();
  }

  allCoursesObs : Observable<course[]>;
  allUserCourses : course[] = new Array<course>();
  noCourses : boolean;
  @Input()
  currentUserId : number;

  displayUserCourses() {
    console.log(this.global.currentUser)
    this.allCoursesObs = this.course.getUserCourses(this.global.currentUser)
    this.allCoursesObs.subscribe(
      (response) => {
        console.log("allusercourses: ",response)
        this.allUserCourses = response;
        this.noCourses = this.allUserCourses.length == 0;
      },
      (response) => {

      }
      // finally?
    )
  }
}
