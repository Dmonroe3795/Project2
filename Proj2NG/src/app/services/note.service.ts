import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http: HttpClient) { }

  readFile() : Observable<string> {
    let filename = "Agile.txt"
    let url = "http://localhost:9090/files/Agile.txt"
    return this.http.get(url,{responseType:'text'});
  }

  uploadFile(file: any) : Observable<string> {
    let head = new HttpHeaders({ 
    'Access-Control-Allow-Origin': '*'});
    let options =  {headers: head}
    let body = {file: file}
    return this.http.post<string>("http://localhost:9090/",body,options);
  }
}
