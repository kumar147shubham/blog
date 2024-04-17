import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  onSubmit(data: any){
    console.warn(data.value);
  }
}
