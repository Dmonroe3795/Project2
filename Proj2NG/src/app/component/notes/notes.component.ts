import { Component, OnInit, Input } from '@angular/core';

import { note } from '../models/note';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  @Input() note : note;
  
}
