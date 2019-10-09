import { Component, OnInit, Input } from '@angular/core';
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

  constructor() { }

  ngOnInit() {
  }


  @Input() c : course;
  
}
