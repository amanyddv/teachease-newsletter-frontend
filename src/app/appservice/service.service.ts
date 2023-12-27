import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  apiUrl = environment.apiUrl; // Use environment.apiUrl here

  constructor(private http:HttpClient) { }

  
  
  url=`${this.apiUrl}`;

  postnewsletter(data:any){
    this.http.post<any>(this.url+"postnewsletter",data).subscribe((res)=>{
    })

  }
  subscribe(data:any){
    this.http.post<any>(this.url+"subscribe",data).subscribe((res)=>{
    })

  }
  newsletterfeeds():Observable<any>{
    return this.http.get(this.url+"newsletterfeeds")
  }
}
