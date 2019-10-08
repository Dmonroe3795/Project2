import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Observable } from 'rxjs';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private user :AccountService) { }

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
  
}
