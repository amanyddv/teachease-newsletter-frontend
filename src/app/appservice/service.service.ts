import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  url="http://localhost:7000/"

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
