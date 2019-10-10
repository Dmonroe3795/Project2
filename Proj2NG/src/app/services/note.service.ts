import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http: HttpClient) { }

  readFile(filename :string) : Observable<string> {
    let url = "http://ec2-54-89-99-128.compute-1.amazonaws.com:8888/files/" + filename;
    return this.http.get(url,{responseType:'text'});
  }

  uploadFile(file: FormData) : Observable<string> {
    return this.http.post("http://ec2-54-89-99-128.compute-1.amazonaws.com:8888/",file,{responseType:'text'});
  }
}
