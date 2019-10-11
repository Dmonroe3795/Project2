import { Component, OnInit, Input } from '@angular/core';
import { course } from '../models/course';
import { GlobalService } from 'src/app/services/global.service';
import { MatDialog } from '@angular/material/dialog';
import { UploadFileDialogComponent } from '../dialogs/upload-file-dialog/upload-file-dialog.component';
import { AddUsersDialogComponent } from '../dialogs/add-users-dialog/add-users-dialog.component';
import { user } from '../models/user';
import { Observable } from 'rxjs';
import { CourseService } from 'src/app/services/course.service';

export interface UploadFileDialogData {
  c: course;
  currUser: user;
}

export interface AddUsersDialogData {
  c: course;
}

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})

export class CourseComponent implements OnInit {

  constructor(private global: GlobalService, private courseService: CourseService, public uploadDialog: MatDialog, public addUserDialog: MatDialog) { }

  ngOnInit() { }


  @Input() c: course;
  updateCourse: Observable<course>;

  openUploadDialog() {
    const uploadDialogRef = this.uploadDialog.open(
      UploadFileDialogComponent, {width: '300px', data: {c: this.c, currUser: this.global.currentUser}}
    );
  }

  openAddUserDialog() {
    const addUserDialogRef = this.addUserDialog.open(
      AddUsersDialogComponent, {width: '500px', data: {c: this.c}}
    );
  }

  removeUser(u: user) {
    this.c.users.splice(this.c.users.indexOf(u), 1);
    this.updateCourse = this.courseService.updateCourse(this.c);
    this.updateCourse.subscribe(
      (response) => {
        this.c = response;
      }
    )
  }
}
