import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/appservice/service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,private service:ServiceService) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      query: ['', Validators.required],
    });
  }

  onSubmit() 
  {
   
    if (this.contactForm.valid) {

    this.service.contact(
      this.contactForm.value
    ).subscribe(response => {
    });
    alert('Thanks for your time')
    this.contactForm.reset();

  }

}
}
