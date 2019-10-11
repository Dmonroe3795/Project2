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
  uploadForm: FormGroup;
  formData: FormData = new FormData();
  uploadFile: Observable<string> = this.noteService.uploadFile(this.formData);
  selectedFile: string;

  noteData: note;
  addNote: Observable<note>;

  updateCourse: Observable<course>;

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      this.file = event.target.files[0];
      this.selectedFile = this.file.name + ' selected.';
      this.uploadForm.get('files').setValue(this.file);
    }
  }

  onSubmit() {
    this.selectedFile = 'Choose File';
    this.formData.set('file', this.uploadForm.get('files').value);

    this.uploadFile.subscribe(
      (response) => {
        this.noteData = new note(0, response, true, this.global.currentUser);
        this.c.notes.push(this.noteData);
        
        this.courseService.updateCourse(this.c).subscribe((newCourse) => {
          this.c = newCourse;
          this.uploadForm.get('files').setValue(null);
        }, res=>{console.log(res)})
      },
      (response) => {
        console.log(response);
      }
    )
  }
}
