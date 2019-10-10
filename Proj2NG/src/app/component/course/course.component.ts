import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { course } from '../models/course';
import { GlobalService } from 'src/app/services/global.service';
import { NoteService } from 'src/app/services/note.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})

export class CourseComponent implements OnInit {

  constructor(private global :GlobalService, private noteService: NoteService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.uploadForm = this.formBuilder.group({
      files: ['']
    });
  }


  @Input() c : course;

  file: any;
  filename: string;
  uploadForm : FormGroup;
  formData = new FormData();
  uploadFile : Observable<string> = this.noteService.uploadFile(this.formData);

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      this.file = event.target.files[0];
      this.uploadForm.get('files').setValue(this.file);
    }
  }

  onSubmit() {
    this.formData.append('file', this.uploadForm.get('files').value);

    this.uploadFile.subscribe(
      (response) => {
        this.filename = response;
      },
      (response) => {
        console.log(response);
      }
    )

  }
  
}
