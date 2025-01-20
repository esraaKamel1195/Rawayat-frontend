import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ChangeDetectionStrategy, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { merge } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DeviceDetectorService } from 'ngx-device-detector';
import { AuthService } from '../../services/auth/auth.service';
// import { SuccessDialogComponent } from '../success-dialog/success-dialog.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatIconModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  // email style
  // readonly email = new FormControl('', [Validators.required, Validators.email]);
  errorMessage = signal('');

  // password style
  hide = signal(true);

  // authentication
  loginForm: FormGroup;
  // credentials = { email: '', password: '' };

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private deviceService: DeviceDetectorService
  ) {
    this.loginForm = this.fb.group({
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
      password: ['', [Validators.required]],
      device_name: [
        deviceService.getDeviceInfo().device
          ? deviceService.getDeviceInfo().device
          : deviceService.getDeviceInfo().deviceType,
        Validators.required,
      ],
    });
  }

  //email validation
  updateErrorMessage(): void {
    if (this.loginForm.get('email')?.hasError('required')) {
      this.errorMessage.set('You must enter a value');
    } else if (this.loginForm.get('email')?.hasError('email')) {
      this.errorMessage.set('Not a valid email');
    } else {
      this.errorMessage.set('');
    }
  }

  //password control
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  login() {
    if (this.loginForm.invalid) {
      this.errorMessage.set('Form data not vaild');
      this.loginForm.markAllAsTouched();
    }

    this.authService.login(this.loginForm.value).subscribe({
      next: (response) => {
        console.log('Login successful:', response);
        localStorage.setItem('token', JSON.stringify(response.token));
        localStorage.setItem('user', JSON.stringify(response.user));
        if (response.user.role === 'admin') {
          this.router.navigateByUrl('/admin/categories');
        } else if (response.user.role === 'reader') {
          this.router.navigateByUrl('/home');
        }
      },
      error: (err) => {
        console.error('Login error:', err);
        this.errorMessage.set(err.error.message);
      },
    });
  }
}
