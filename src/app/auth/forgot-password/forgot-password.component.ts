import { CommonModule } from '@angular/common';
import { Component, signal, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    CommonModule,
    MatIconModule,
  ],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css',
})
export class ForgotPasswordComponent implements OnInit {
  forgetPasswordForm: FormGroup;
  errorMessage = signal('');

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.forgetPasswordForm = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
          ),
        ],
      ],
    });
  }

  ngOnInit(): void {}

  updateErrorMessage(): void {
    if (this.forgetPasswordForm.get('email')?.hasError('required')) {
      this.errorMessage.set('You must enter a value');
    } else if (this.forgetPasswordForm.get('email')?.hasError('email')) {
      this.errorMessage.set('Not a valid email');
    } else {
      this.errorMessage.set('');
    }
  }

  forgetPassword() {
    if (this.forgetPasswordForm.invalid) {
      console.log('Form is invalid');
      this.forgetPasswordForm.markAllAsTouched();
      return;
    }

    console.log('Form submitted successfully');
    this.authService.forgetPassword(this.forgetPasswordForm.value.email).subscribe({
      next: (response) => {
        console.log('forgetPassword successful:', response);
      },
      error: (err) => {
        console.error('Login error:', err);
        this.errorMessage.set(err.error.message);
      },
    });
  }
}
