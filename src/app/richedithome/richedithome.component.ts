import { Component } from '@angular/core';

@Component({
  selector: 'app-richedithome',
  templateUrl: './richedithome.component.html',
  styleUrls: ['./richedithome.component.css']
})
export class RichedithomeComponent {
  childData: any;

  
  exportToPdf(data: any){
    this.childData = data;
    console.warn(this.childData);
  }
}
