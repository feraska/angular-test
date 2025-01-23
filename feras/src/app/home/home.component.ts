import { CommonModule } from '@angular/common';
import { afterRender, AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
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

export class HomeComponent implements OnInit,AfterViewInit{
  applyForm = new FormGroup({
  firstName:new FormControl('')
  
  })
  posts: Info[] = []
  error = false
  loading = false
  ngOnInit(): void {
      this.posts = this.api.getPosts("https://jsonplaceholder.typicode.com/posts")
      this.error = this.api.getError()
      this.loading = this.api.getLoading()
      
      
      
     
  }
  constructor(private api:ApiService){
    afterRender(()=> {
      // elementRef.nativeElement.querySelector('input')?.focus()
      const input = document.getElementsByTagName('input')[0] as HTMLElement
      input?.focus()
      const element = document.getElementsByClassName('feras')[0] as HTMLElement
      element?.style?.setProperty('display','none')
    })
  }
  ngAfterViewInit(): void {
    
      
      
    }
  submit() {
   //this.api.submitApplication(this.applyForm.value.firstName??'feras')
   console.log(this.applyForm.controls.firstName.value)
   this.applyForm.reset()
  }
}
