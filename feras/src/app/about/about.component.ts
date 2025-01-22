import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  // @Input() data!: string ;
  list:string[] = ["feras","ameer","sanad","sohel"]
  count = 0
  incremet() {
    this.count++
    
  }
  decrement() {
    if(this.count > 0)
    this.count--
  }
}
