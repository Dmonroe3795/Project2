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
  u: user = new user(0, null, null, null, null, null, 0);
  currUser: Observable<user>;
  login() {
    if (this.us == null || this.ps == null ) {
      this.result = "Please enter a valid Username and Password."
    }
    else {
      this.currUser = this.userv.login(this.us,this.ps);
      
      this.currUser.subscribe(

        (response) => {
          if(response == null) {
            console.log("Calls first response")
            this.result = "Please enter a valid Username and Password."
          }
          else {
            console.log(response);
            this.u = response;
            this.global.currentUser=this.u;
            if(this.u.r_id.id == 1){
              this.global.isTrainer = true;
            }
            console.log(this.global.currentUser);
            this.router.navigate(['/dashboard']);
          }
        },

        (response) => {

          console.log("Failure! Called 2nd response");
          this.result = "Please enter a valid Username and Password."
          
        }
        
      );  
    }
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
