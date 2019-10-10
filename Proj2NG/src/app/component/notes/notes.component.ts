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
    console.log(this.n)
    this.getNote();
  }

  @Input() n : note;
  
  file: Observable<string>;
  fileText: string;
  downloadLink :string;
  getNote() {
    this.file =  this.noteServ.readFile(this.n.filename);
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

}
