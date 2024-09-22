import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  // Define the contact form model
  contactFormModel = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    // Log the form submission
    console.log('Form submitted', this.contactFormModel);

    // Reset the form after submission
    this.contactFormModel = {
      name: '',
      email: '',
      message: ''
    };
  }
}
