import { Component, OnInit, Inject } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';
import { course } from '../../models/course';
import { Observable } from 'rxjs';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { NewCourseDialogData } from '../../dashboard/dashboard.component';
import { count } from 'rxjs/operators';

@Component({
  selector: 'app-new-course-dialog',
  templateUrl: './new-course-dialog.component.html',
  styleUrls: ['./new-course-dialog.component.css']
})
export class NewCourseDialogComponent implements OnInit {

  constructor(
    private courseService: CourseService, public newCourseDialog: MatDialog,
    public newCourseDialogRef: MatDialogRef<NewCourseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: NewCourseDialogData
  ) { }

  ngOnInit() {
  }

  courseName: string;
  addCourse: Observable<course>;

  createCourse() {
    if (this.courseName != null) {
      console.log(this.data.currUser)
      let newCourse = new course(0, [], this.data.currUser, this.courseName, []);
      this.addCourse = this.courseService.createCourse(newCourse);
      
      this.addCourse.subscribe(
        (response) => {
          this.data.userCourses.push(response);
          this.newCourseDialogRef.close();
        }
      );
    }
  }
}
