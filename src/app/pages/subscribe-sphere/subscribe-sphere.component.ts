import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/appservice/service.service';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subscribe-sphere',
  templateUrl: './subscribe-sphere.component.html',
  styleUrls: ['./subscribe-sphere.component.css']
})
export class SubscribeSphereComponent {
  otpForm!: FormGroup;
  isOtpSent = false;

  constructor(private formBuilder: FormBuilder,private service:ServiceService,private route: ActivatedRoute) {}

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
    console.log('Segment Data:', segmentData);
    const email = this.otpForm.value.email;
    
    this.service.sendOTP({
      email:email,
      title:segmentData,
    }).subscribe(response => {
      console.log(response); // Handle the response as needed
    });
    this.isOtpSent = true;

  }

  onSubmit() {
   
    const email = this.otpForm.value.email; // Replace with the actual email
    const otp = this.otpForm.value.otp; // Replace with the actual OTP
    this.service.verifyOTPAndRegister(email, otp).subscribe(response => {
      console.log(response); // Handle the response as needed
    });
  }
 
}
