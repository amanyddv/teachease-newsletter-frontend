import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/appservice/service.service';

import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subscribe-sphere',
  templateUrl: './subscribe-sphere.component.html',
  styleUrls: ['./subscribe-sphere.component.css']
})
export class SubscribeSphereComponent {
  otpForm!: FormGroup;
  isOtpSent = false;

  constructor(private formBuilder: FormBuilder,private service:ServiceService,private route: ActivatedRoute,private router: Router) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.otpForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      otp: ['', Validators.required],
    });
  }


  getOtp() {
    const segmentData = this.route.snapshot.paramMap.get('title'); // Replace 'segmentName' with the actual parameter name
    const email = this.otpForm.value.email;
    
    this.service.sendOTP({
      email:email,
      title:segmentData,
    }).subscribe(response => {
    });
    this.isOtpSent = true;

  }

  onSubmit() {
    let navigate=false
    const email = this.otpForm.value.email; // Replace with the actual email
    const otp = this.otpForm.value.otp; // Replace with the actual OTP
    this.service.verifyOTPAndRegister(email, otp).subscribe(response => {
      
      switch (response.message){
        case 'OTP verification successful':
          alert("Thank you for registering!");
          navigate=true;
          if(navigate){
            this.router.navigate(['/']);
          }
          break;
        case 'Invalid OTP':
          alert('Invalid OTP!');
          break;
        case 'OTP has expired':
          alert('OTP has expired!');
          break;
        default :
          alert('Please try again later!');
      }
    });
  }
 
}
