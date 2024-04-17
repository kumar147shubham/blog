import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class RicheditService {

  baseUrl = 'https://localhost:7170/api/';
  constructor(private httpClient: HttpClient) { }
  data : any;

  getCoverList(){
    let url = this.baseUrl + 'WeatherForecast/GetCover';
    
    // let res = this.httpClient.get(url).subscribe(
    //   m =>{
    //     this.data = m;
    //   }
    // )
    return this.httpClient.get(url);
  }
  

}
