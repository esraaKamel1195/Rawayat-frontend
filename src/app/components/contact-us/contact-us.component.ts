import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { merge } from 'rxjs';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../interfaces/contact';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css',
})
export class ContactUsComponent {
  //validation

  //name
  nameFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
  ]);
  //email
  readonly email = new FormControl('', [Validators.required, Validators.email]);
  //phone
  phoneFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern('[0-9]{11}'),
  ]);
  //message
  messageFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(10),
  ]);

  constructor(private contactService: ContactService) {
    merge(this.email.statusChanges, this.email.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessage());
  }

  //handling errors
  errorMessage = signal('');
  updateErrorMessage() {
    if (this.email.hasError('required')) {
      this.errorMessage.set('You must enter an a valid mail');
    } else if (this.email.hasError('email')) {
      this.errorMessage.set('your email is not valid');
    } else {
      this.errorMessage.set('');
    }
  }

  //submitting form data to api

  onSubmit() {
    if (
      this.email.valid &&
      this.phoneFormControl.valid &&
      this.nameFormControl.valid &&
      this.messageFormControl.valid
    ) {
      const contact: Contact = {
        email: this.email.value || '',
        phone: this.phoneFormControl.value || '',
        name: this.nameFormControl.value || '',
        message: this.messageFormControl.value || '',
      };
      this.contactService.addContact(contact).subscribe({
        next: (response: any) => {
          alert('Message sent successfully');
          this.email.reset();
          this.phoneFormControl.reset();
          this.nameFormControl.reset();
          this.messageFormControl.reset();
        },
        error: (error: any) => {
          console.error('Error sending message, please try again', error);
        },
      });
    } else {
      alert('Please fill all the required fields');
    }
  }
}
