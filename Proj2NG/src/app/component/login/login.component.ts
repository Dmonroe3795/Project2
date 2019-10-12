import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AccountService } from '../../services/account.service';
import { Observable } from 'rxjs';
import { user } from '../models/user';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private userv: AccountService, private global: GlobalService) {
  }

  ngOnInit() {
  }

  us: string;
  ps: string;
  result: string;
  u: user = new user(0, null, null, null, null, null, false);
  currUser: Observable<user>;
  login() {
    if (this.us == null || this.ps == null) {
      this.result = "Please enter a valid Username and Password."
    }
    else {
      this.currUser = this.userv.login(this.us, this.ps);

      this.currUser.subscribe(

        (response) => {
          if (response == null) {
            console.log("Calls first response")
            this.result = "Please enter a valid Username and Password."
          }
          else {
            console.log(response);
            this.u = response;
            this.global.currentUser = this.u;
            console.log(this.global.currentUser.lastname + ' login global')
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



}
