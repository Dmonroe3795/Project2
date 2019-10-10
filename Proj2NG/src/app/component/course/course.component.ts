import { Component, OnInit, Input } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';
import { Observable } from 'rxjs';
import { course } from '../models/course';
import { GlobalService } from 'src/app/services/global.service';
import { NoteService } from 'src/app/services/note.service';
// import { note } from '../models/note';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})

export class CourseComponent implements OnInit {

  constructor(private global :GlobalService, private noteService: NoteService) { }

  ngOnInit() {
  }


  @Input() c : course;

  file: any
  uploadFile : Observable<string> = this.noteService.uploadFile(this.file);

  getFile(event) {
    console.log(event.target.value);
    this.file = event.srcElement.files[0];
    console.log(this.file);

    this.uploadFile.subscribe(
      (response) => {
        console.log(response)
      },
      (response) => {
        console.log(response)
      }
    )

  }
  
}
