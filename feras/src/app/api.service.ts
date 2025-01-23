import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Info } from './info';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts'; 
  private data:any[] = []
  private error = false
  private loading = false
  constructor(private http:HttpClient) {
    
   }
    // GET Request
  getPosts(apiUrl:string) {
    
      this.loading = true
      this.error = false
      this.http.get<any[]>(apiUrl).subscribe({
      next:(value)=>{
        this.data = value
        this.error = false
      },
      error:(e)=> {
        this.error = true
        this.loading = false
      },
      complete:()=>{
        this.loading = false
        this.error = false
      }
      
    }
      
    )
    
 
  return this.data
   
  }
  getError() {
    return this.error
  }
  getLoading() {
    return this.loading
  }

  submitApplication(firstName:string) {
    console.log(firstName)
    
  }
}
