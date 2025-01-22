import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule,FormGroup,FormControl } from '@angular/forms';
import {ApiService} from "../api.service"
import { Info } from '../info';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-home',
  imports: [CommonModule,ReactiveFormsModule,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  applyForm = new FormGroup({
  firstName:new FormControl('')
  
  })
  posts: Info[] = []
  ngOnInit(): void {
      this.api.getPosts("https://jsonplaceholder.typicode.com/posts").subscribe((data)=>{
        this.posts = data
      })
  }
  constructor(private api:ApiService){

  }
  submit() {
   //this.api.submitApplication(this.applyForm.value.firstName??'feras')
   console.log(this.applyForm.controls.firstName.value)
   this.applyForm.reset()
  }
}
