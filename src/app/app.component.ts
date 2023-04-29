import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title="Child to Parent communication";
  
  onSubmit(data: any){
    console.warn(data.value);
  }
}