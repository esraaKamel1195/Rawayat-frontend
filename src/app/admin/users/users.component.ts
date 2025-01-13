import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { User } from '../../interfaces/user';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, MatPaginatorModule, MatTableModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent implements OnInit, AfterViewInit {
  users: User[] = [];
  displayedColumns: string[] = [
    'username',
    'email',
    'role',
    'gender',
    'actions',
  ];
  dataSource = new MatTableDataSource<User>(this.users);

  @ViewChild(MatPaginator) paginator?: MatPaginator;

  constructor(private router: Router, private usersService: UsersService) {}

  ngOnInit(): void {
    this.usersService.getUsers().subscribe({
      next: (response) => {
        console.log('response', response);
        this.users = response;
        this.dataSource = new MatTableDataSource<User>(this.users);
      }, error: (error) => {
        console.log('error', error);
      }
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator ? this.paginator : null;
  }

  addUser() {
  }

  edit(id: number = 0) {
    console.log('Editing User with ID:', id);
    this.router.navigate([`user/update/${id}`]);
  }

  deleteUser(id: number = 0) {
    if (confirm('Are you sure you want to delete this User?')) {
      this.usersService.deleteUser(id).subscribe({
        next: () => {
          alert('User deleted successfully!');
          this.users = this.users.filter(
            (user) => user.id !== id
          );
        },
        error: () => {
          alert('Failed to delete user. Please try again.');
        },
      });
    }
  }
}

export interface PeriodicElement {
  id: number;
  username: string;
  email: string;
  role: string;
  gender: string;
}
