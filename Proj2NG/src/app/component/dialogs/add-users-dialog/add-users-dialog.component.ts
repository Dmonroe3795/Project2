import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddUsersDialogData } from '../../course/course.component';
import { Observable } from 'rxjs';
import { course } from '../../models/course';
import { CourseService } from 'src/app/services/course.service';
import { MatDialog } from '@angular/material/dialog';
import { user } from '../../models/user';

@Component({
  selector: 'app-add-users-dialog',
  templateUrl: './add-users-dialog.component.html',
  styleUrls: ['./add-users-dialog.component.css']
})
export class AddUsersDialogComponent implements OnInit {

  constructor(
    private courseService: CourseService, public uploadDialog: MatDialog,
    public uploadFileDialogRef: MatDialogRef<AddUsersDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AddUsersDialogData
  ) { }

  ngOnInit() {
    this.getUsersToAdd();
  }
  
  getUsersNotInCourse: Observable<user[]> = this.courseService.getUsersNotInCourse(this.data.c.id);
  updateCourse: Observable<course>;
  availableUsers: user[] = [];
  selectedUsers: user[] = [];

  getUsersToAdd() {
    this.getUsersNotInCourse.subscribe(
      (response) => {
        this.availableUsers = response;
      },
      (response) => {}
    )
  }

  close() {
    this.uploadFileDialogRef.close();
  }

  selectUser(u: user) {
    let user = this.availableUsers.splice(this.availableUsers.indexOf(u), 1)[0];
    this.selectedUsers.push(user);
  }

  onSubmit() {
    this.data.c.users = this.data.c.users.concat(this.selectedUsers);
    this.updateCourse = this.courseService.updateCourse(this.data.c);
    this.updateCourse.subscribe(
      (response) => {
        this.data.c = response;
        this.close();
      }
    )
  }

}
