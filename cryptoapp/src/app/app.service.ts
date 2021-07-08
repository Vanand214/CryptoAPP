import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http:HttpClient) { }

   httpOptions = {
    headers: new HttpHeaders({ 
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE"
    })
  };

  public getData(){
    return this.http.get("http://localhost:3000/getTickers",this.httpOptions);
  }
  

  
}
