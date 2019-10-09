import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Observable } from 'rxjs';
import { AccountService } from '../../services/account.service';

import { course } from '../models/course';
import { CourseService } from 'src/app/services/course.service';
import { note } from '../models/note';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private user :AccountService, private course : CourseService) { 
    this.displayUserCourses();
  }

  ngOnInit() {
  }
  
  us :string;
  ps :string;
  result :string;

  login() {

    this.user.login(this.us, this.ps).subscribe(

      (response) => {

        console.log("Success!");
        
      },

      (response) => {

        console.log("Failure!");
        
      }
      
    );  
  }


  allCoursesObs : Observable<course[]> = this.course.getUserCourses(2);
  allUserCourses : course[] = [];

  displayUserCourses() {
    this.allCoursesObs.subscribe(
      (response) => {
        this.allUserCourses = response;
      },
      (response) => {

      }
      // finally?
    )
  }
  
}
