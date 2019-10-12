import { Injectable } from '@angular/core';
import { user } from '../component/models/user';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  title: string = 'Squire';
  currentUser: user = new user(-1, null, null, null, null, null, false);


  constructor() { }
}
