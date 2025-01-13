import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnInit {
  userSubscription?: Subscription;
  user = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  };

  constructor(private usersServices: UsersService) {}

  ngOnInit(): void {
    this.usersServices.getCurrentUser().subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  save() {
    console.log('User information saved:', this.user);
    alert('Profile saved successfully!');
  }

  cancel() {
    console.log('Action canceled');
    alert('Changes canceled!');
  }
}
