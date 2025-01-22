import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Info } from './info';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts'; 
  constructor(private http:HttpClient) {
    
   }
    // GET Request
  getPosts(apiUrl:string): Observable<Info[]> {
    return this.http.get<Info[]>(apiUrl);
  }

  submitApplication(firstName:string) {
    console.log(firstName)
    
  }
}
