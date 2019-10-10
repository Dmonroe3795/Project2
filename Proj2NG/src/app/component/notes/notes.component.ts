import { Component, OnInit, Input } from '@angular/core';

import { note } from '../models/note';
import { NoteService } from 'src/app/services/note.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  constructor(private noteServ: NoteService) {
  }

  ngOnInit() {
    console.log(note)
    this.getNote();
  }

  @Input() note : note;
  
  file: Observable<string> = this.noteServ.readFile();
  fileText: string;

  getNote() {
    this.file.subscribe(
      (response) => {
        this.fileText = response;
      },
      (response) => {
        console.log(response)
      }
    )
  }

}
