import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { user } from '../models/user';
import { Observable } from 'rxjs';
import { AccountService } from 'src/app/services/account.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  constructor(private router: Router, private global: GlobalService, private accountServ: AccountService) { }

  ngOnInit() {
  }

  fn: string;
  ln: string;
  us: string;
  pw: string;
  result: string;

  u: user;
  createAcc: Observable<user>;

  signUp() {
    // is instructor checkbox
    if (this.fn == null || this.ln == null || this.us == null || this.pw == null) {
      this.result = "Please enter all information."
    }
    else {
      this.u = new user(0, this.us, this.pw, this.fn, this.ln, [], false);

      this.createAcc = this.accountServ.createAccount(this.u);
      this.createAcc.subscribe(
        (response) => {
          console.log(response);
          this.global.currentUser = response;
          this.router.navigate(['/dashboard']);
        }
      )
    }
  }


}
