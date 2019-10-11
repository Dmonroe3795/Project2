import { Injectable } from '@angular/core';
import { user } from '../component/models/user';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  title : string = 'Squire';
  currentUser: user = new user(-1, null, null, null, null, null, false);
  isTrainer :boolean = false;

//   {
//     "id": 1,
//     "username": "testTrainer",
//     "pass": "pass",
//     "firstname": "TestTrainer",
//     "lastname": "testlast",
//     "r_id": {
//         "id": 1,
//         "name": "Instructor"
//     }
// }

  
  constructor() { }
}
