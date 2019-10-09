import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
// import { Observable } from 'rxjs';
import { AccountService } from '../../services/account.service';
import { Observable } from 'rxjs';
import { user } from '../models/user';
import { GlobalService } from 'src/app/services/global.service';

// import { course } from '../models/course';
// import { CourseService } from 'src/app/services/course.service';
// import { note } from '../models/note';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private userv :AccountService,private global: GlobalService) { 
    // this.displayUserCourses();
  }

  ngOnInit() {
  }

  us :string;
  ps :string;
  result :string;
  u: user;
  currUser: Observable<user>;
  login() {
    this.currUser = this.userv.login(this.us,this.ps);
    this.currUser.subscribe(

      (response) => {

        console.log(response);
        this.u = response;
        // this.router.navigate(['/dashboard']);
        this.global.currentUser=this.u;
        console.log(this.global.currentUser);
      },

      (response) => {

        console.log("Failure!");
        
      }
      
    );  
  }


  // allCoursesObs : Observable<course[]> = this.course.getUserCourses(2);
  // allUserCourses : course[] = [];

  // displayUserCourses() {
  //   this.allCoursesObs.subscribe(
  //     (response) => {
  //       this.allUserCourses = response;
  //     },
  //     (response) => {

  //     }
  //     // finally?
  //   )
  // }
  
}
