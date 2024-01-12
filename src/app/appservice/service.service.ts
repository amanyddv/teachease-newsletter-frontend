import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  apiUrl = environment.apiUrl; 

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


  sendOTP(email: any): Observable<any> {
    console.log(email)
    return this.http.post(`${this.apiUrl}sendOTP`, email);
  }

  verifyOTPAndRegister(email: string, otp: string): Observable<any> {
    const body = { email, otp };
    return this.http.post(`${this.apiUrl}verifyOTPAndRegister`, body);
  }

  contact(data: any): Observable<any> {
    console.log(data)
    return this.http.post(`${this.apiUrl}contact`,data);
  }


}
