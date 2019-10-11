import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { course } from '../models/course';
import { GlobalService } from 'src/app/services/global.service';
import { NoteService } from 'src/app/services/note.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { note } from '../models/note';
import { CourseService } from 'src/app/services/course.service';
import { MatDialog } from '@angular/material/dialog';
import { UploadFileDialogComponent } from '../upload-file-dialog/upload-file-dialog.component';
import { user } from '../models/user';

export interface UploadFileDialogData {
  c: course;
  currUser: user;
}

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})

export class CourseComponent implements OnInit {

  constructor(private global: GlobalService, private noteService: NoteService, private courseService: CourseService, private formBuilder: FormBuilder, public uploadDialog: MatDialog) { }

  ngOnInit() { }


  @Input() c: course;
  
  openUploadDialog() {
    const uploadDialogRef = this.uploadDialog.open(
      UploadFileDialogComponent, {width: '300px', data: {c: this.c, currUser: this.global.currentUser}}
    );
  }
}
