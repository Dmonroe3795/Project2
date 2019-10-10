import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { note } from '../component/models/note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http: HttpClient) { }

  readFile(filename :string) : Observable<string> {
    // let url = "http://localhost:9090/files/" + filename;

    let url = "http://ec2-54-89-99-128.compute-1.amazonaws.com:8888/files/" + filename;
    return this.http.get(url,{responseType:'text'});
  }

  uploadFile(file: FormData) : Observable<string> {
    // return this.http.post("http://localhost:9090/",file,{responseType:'text'});

    return this.http.post("http://ec2-54-89-99-128.compute-1.amazonaws.com:8888/",file,{responseType:'text'});
  }


  createNote(note: any) : Observable<note> {
    let head = new HttpHeaders({ 'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'});
    let options =  {headers: head}
    let body = JSON.stringify(note);
    // return this.http.post<note>("http://localhost:9090/notes",body,options);
    return this.http.post<note>("http://ec2-54-89-99-128.compute-1.amazonaws.com:8888/notes",body,options);
  }
}
