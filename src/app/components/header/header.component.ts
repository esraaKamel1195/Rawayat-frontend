import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CategoryService } from '../../services/category.service';
import { AuthService } from '../../services/auth/auth.service';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  categories: any[] = [];
  isAuthorized: boolean = false;
  userRole: string = '';

  constructor(
    public router: Router,
    private categoryService: CategoryService,
    private authService: AuthService
  ) {
    this.categoryService.getAllCategories().subscribe((data: any) => {
      this.categories = data;
    });
  }

  ngOnInit(): void {
    this.isAuthorized = this.authService.isAuthenticated();
    this.userRole = this.authService.getUserRole();
    console.log('this.userRole', this.userRole);
  }

  logout() {
    this.authService.logout().subscribe({
      next: (res) => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
      }, error: (error) => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        console.log('error', error.error.message);
        this.router.navigateByUrl('/auth/login');
      }
    });
  }
}
