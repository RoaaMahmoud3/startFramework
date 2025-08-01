import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css'
})
export class Portfolio {
  selectedImg:string| null = null;
  selectedAlt:string | null = null;
  openImg_Alt(img: string , alt?: string) {
    this.selectedImg=img;
    this.selectedAlt=alt || null;
    //this.selectedAlt = alt ? alt : null;
  }
  closeImg_Alt(){
    this.selectedImg=null;
    this.selectedAlt=null;
  }
}
