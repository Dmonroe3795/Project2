import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UploadFileDialogData } from '../course/course.component';
import { Observable } from 'rxjs';
import { course } from '../models/course';
import { GlobalService } from 'src/app/services/global.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { note } from '../models/note';
import { CourseService } from 'src/app/services/course.service';
import { MatDialog } from '@angular/material/dialog';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-upload-file-dialog',
  templateUrl: './upload-file-dialog.component.html',
  styleUrls: ['./upload-file-dialog.component.css']
})
export class UploadFileDialogComponent implements OnInit {

  constructor(
    private global: GlobalService, private noteService: NoteService, private courseService: CourseService, private formBuilder: FormBuilder, public uploadDialog: MatDialog,
    public uploadFileDialogRef: MatDialogRef<UploadFileDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UploadFileDialogData
  ) { }

  ngOnInit() {
    this.uploadForm = this.formBuilder.group({
      files: ['']
    });
  }

  file: any;
  uploadForm: FormGroup;
  formData: FormData = new FormData();
  uploadFile: Observable<string> = this.noteService.uploadFile(this.formData);

  noteData: note;
  addNote: Observable<note>;

  updateCourse: Observable<course>;
  
  onFileSelect(event) {
    console.log(this.data.c.notes + ' modal user, global ' + this.data.currUser.lastname)
    if (event.target.files.length > 0) {
      this.file = event.target.files[0];
      this.uploadForm.get('files').setValue(this.file);
    }
  }

  onSubmit() {
    this.formData.set('file', this.uploadForm.get('files').value);

    this.uploadFile.subscribe(
      (response) => {
        this.noteData = new note(0, response, true, this.data.currUser);
        this.data.c.notes.push(this.noteData);
        
        this.courseService.updateCourse(this.data.c).subscribe((newCourse) => {
          this.data.c = newCourse;
          this.uploadForm.get('files').setValue(null);
          this.uploadFileDialogRef.close();
        }, res=>{console.log(res)})
      },
      (response) => {
        console.log(response);
      }
    )
  }

}
