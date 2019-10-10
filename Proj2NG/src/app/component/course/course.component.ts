import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { course } from '../models/course';
import { GlobalService } from 'src/app/services/global.service';
import { NoteService } from 'src/app/services/note.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { note } from '../models/note';


import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})

export class CourseComponent implements OnInit {

  constructor(private global: GlobalService, private noteService: NoteService, private courseService: CourseService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.uploadForm = this.formBuilder.group({
      files: ['']
    });
  }


  @Input() c: course;

  file: any;
  filename: string;
  uploadForm: FormGroup;
  formData = new FormData();
  uploadFile: Observable<string> = this.noteService.uploadFile(this.formData);

  noteData: note;
  addNote: Observable<note>;
  // note : note;

  updateCourse: Observable<course>;
  // updatedCourse: course;

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      this.file = event.target.files[0];
      this.uploadForm.get('files').setValue(this.file);
      this.file = null;
      (<HTMLInputElement>document.getElementById("fileSelector")).value = '';

    }
  }

  onSubmit() {
    this.formData.append('file', this.uploadForm.get('files').value);

    this.uploadFile.subscribe(
      (response) => {
        this.filename = response;
        this.noteData = new note(0, response, true, this.global.currentUser);
        this.c.notes.push(this.noteData);
        this.courseService.updateCourse(this.c).subscribe((newCourse) => {
          this.c = newCourse;
        })
      },
      (response) => {
        console.log(response);
      }
    )
    this.filename = null;
    this.noteData = null;
    this.addNote = null;
  }
}
