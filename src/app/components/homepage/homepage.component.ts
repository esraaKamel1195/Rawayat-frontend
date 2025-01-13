import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CategoryCarouselComponent } from "./category-carousel/category-carousel.component";
import { BookCollectionComponent } from "./book-collection/book-collection.component";
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    CategoryCarouselComponent,
    BookCollectionComponent
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent implements OnInit {
  isAuthenticated: boolean = false;

  constructor(
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.isAuthenticated = this.authService.isAuthenticated();
  }

  categoryChange(event: number) {
    console.log('event', event);
  }
}
