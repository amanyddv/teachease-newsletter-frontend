import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/appservice/service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  subscribeForm: FormGroup;
  showSuccessMessage = false;

  constructor(private formBuilder: FormBuilder,private service:ServiceService) {

    this.subscribeForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.subscribeForm.valid) {
      // Handle the subscription logic here (e.g., send data to the server)
      this.service.subscribe(this.subscribeForm.value)
    }
    // Show success message
    this.showSuccessMessage = true;

    // Clear the email field
  }
  closeSuccessMessage() {
    this.showSuccessMessage = false;

  }
}
