import { CommonModule } from '@angular/common';
import { Component, ViewChild, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatStepper, MatStepperModule } from '@angular/material/stepper';
import { Router, RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { DeviceDetectorService } from 'ngx-device-detector';
import { CategoryService } from '../../services/category.service';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: true,
  imports: [
    RouterModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatStepperModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatIconModule,
    MatRadioModule,
    CommonModule,
  ],
})
export class RegisterComponent {
  isLinear = false;
  registrationForm: FormGroup;
  secondFormGroup: FormGroup;
  hidePassword: boolean = true;
  hideConfirmPassword: boolean = true;
  categories: any[] = [];
  selectedChips: any[] = [];
  errorMessage = signal('');
  imagePreview: string | null = null;
  @ViewChild('stepper', { static: false }) stepper?: MatStepper;

  constructor(
    private readonly _formBuilder: FormBuilder,
    private readonly categoryService: CategoryService,
    private readonly authService: AuthService,
    private readonly router: Router,
    private readonly categoriesService: CategoryService,
    private readonly deviceService: DeviceDetectorService
  ) {
    this.registrationForm = this._formBuilder.group(
      {
        username: ['', [Validators.required, Validators.maxLength(10)]],
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
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', Validators.required],
        gender: ['', Validators.required],
        image: ['', Validators.required],
        role: ['reader', Validators.required],
        device_name: [
          deviceService.getDeviceInfo().device
            ? deviceService.getDeviceInfo().device
            : deviceService.getDeviceInfo().deviceType,
          Validators.required,
        ],
      },
      { validators: this.passwordMatchValidator }
    );

    this.secondFormGroup = this._formBuilder.group({
      categories: [[], [this.maxSelectedValidator(3)]],
    });

    this.categoryService.getAllCategories().subscribe((data: any) => {
      this.categories = data;
    });
  }

  passwordMatchValidator(group: FormGroup): { [key: string]: boolean } | null {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }

  toggleConfirmPasswordVisibility() {
    this.hideConfirmPassword = !this.hideConfirmPassword;
  }

  onFileSelect(event: any) {
    const file = event.target.files[0];

    this.registrationForm.patchValue({ image: file });

    this.registrationForm.get('image')?.updateValueAndValidity();

    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
    reader?.readAsDataURL(file);
  }

  onCategChange(event: any, category: any): void {
    const value = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      this.selectedChips.push(category.cat_id);
    } else {
      const index = this.selectedChips.indexOf(category.cat_id);
      if (index !== -1) {
        this.selectedChips.splice(index, 1);
      }
    }
    this.secondFormGroup.controls['categories'].setValue(this.selectedChips);
    this.secondFormGroup.controls['categories'].updateValueAndValidity();
  }

  maxSelectedValidator(max: number) {
    return (control: FormControl) => {
      const value = control.value || [];
      return value.length > max ? { maxSelected: { max } } : null;
    };
  }

  onSubmit() {
    console.log(this.registrationForm.value);
    if (this.registrationForm.invalid) {
      this.errorMessage.set('Form data not vaild');
      return;
    }

    const formData = new FormData();
    formData.append('username', this.registrationForm.get('username')?.value);
    formData.append('email', this.registrationForm.get('email')?.value);
    formData.append('password', this.registrationForm.get('password')?.value);
    formData.append('image', this.registrationForm.get('image')?.value);
    formData.append('gender', this.registrationForm.get('gender')?.value);
    formData.append('role', this.registrationForm.get('role')?.value);
    formData.append(
      'device_name',
      this.registrationForm.get('device_name')?.value
    );

    this.authService.register(formData).subscribe({
      next: (response) => {
        localStorage.setItem('token', response.token);
        localStorage.setItem('user', JSON.stringify(response.user));
        this.stepper?.next();
      },
      error: (error) => {
        Object.keys(error.error.errors)?.forEach((element: any) => {
          this.registrationForm
            .get(element)
            ?.setErrors({ notCorrect: error.error.errors[element] });
        });
        this.errorMessage.set('Not All Fields Value are valid Check again');
      },
    });
  }

  storeCategory() {
    console.log('form value', this.secondFormGroup.value.categories);
    this.categoriesService
      .sendSelectedUserCategory(this.secondFormGroup.value.categories)
      .subscribe({
        next: (response) => {
          console.log(response);
          this.stepper?.next();
          if (this.registrationForm.value.role === 'admin') {
            this.router.navigateByUrl('/admin');
          } else if (this.registrationForm.value.role === 'reader') {
            this.router.navigateByUrl('/home');
          }
        },
        error: (err) => {
          console.log(err);
          this.errorMessage.set(err.error.message);
        },
      });
  }
}
