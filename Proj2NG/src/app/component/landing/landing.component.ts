import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private router: Router, private global: GlobalService) { }

  ngOnInit() {
  }

}
