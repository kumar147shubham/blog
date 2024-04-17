import { Component, OnInit } from '@angular/core';
import { Subject, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-testngxextendedpdfviewer',
  templateUrl: './testngxextendedpdfviewer.component.html',
  styleUrls: ['./testngxextendedpdfviewer.component.css']
})
export class TestngxextendedpdfviewerComponent implements OnInit {
 
  srcbase64 : any;
  constructor(private httpClient: HttpClient){}
  
  ngOnInit(): void {
    this.srcbase64 = atob(this.base64);
  }

 

  // BtnClick(){
  //   this.httpClient.get(
  //     '/assets/base64DataForPdf.txt',
  //     { responseType: 'text' as 'json' })
  //   .pipe(
  //     tap((base64) => (base64 as string)),
  //   ).subscribe();
  // }
  
}