import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/appservice/service.service';


@Component({
  selector: 'app-postnewsletter',
  templateUrl: './postnewsletter.component.html',
  styleUrls: ['./postnewsletter.component.css']
})
export class PostnewsletterComponent {

  feedForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private service:ServiceService) {
    this.feedForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.feedForm.valid) {
      // Handle the feed submission logic here (e.g., send data to the server)
      console.log('Feed submitted with:', this.feedForm.value);
      this.service.postnewsletter(this.feedForm.value);
      // Reset the form after submission
      this.feedForm.reset();
    }
  }
}
