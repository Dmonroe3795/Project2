import { Component, OnInit, Input } from '@angular/core';

import { note } from '../models/note';
import { NoteService } from 'src/app/services/note.service';
import { Observable } from 'rxjs';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  constructor(private noteServ: NoteService, private global: GlobalService) {
  }

  ngOnInit() {
    console.log('note comp ' + this.n)
    this.getNote();
  }

  @Input() n: note;

  file: Observable<string>;
  fileText: string;
  downloadLink: string;
  updateNote: Observable<note>;

  isVisible(): boolean {
    if (this.global.currentUser.isInstructor)
      return true;
    if (this.n.visible)
      return true;
    return false
  }

  getNote() {

    this.file = this.noteServ.readFile(this.n.filename);

    this.file.subscribe(
      (response) => {
        this.fileText = response;
        this.downloadLink = "http://ec2-54-89-99-128.compute-1.amazonaws.com:8888/files/" + this.n.filename;
      },
      (response) => {
        console.log(response)
      }
    )
  }

  changeVisibility() {
    this.n.visible = !this.n.visible;
    this.updateNote = this.noteServ.createNote(this.n);
    this.updateNote.subscribe(
      (response) => {
        this.n = response;
      }
    )
  }

}
