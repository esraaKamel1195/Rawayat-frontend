import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReviewsService } from '../../../services/reviews.service';
import { Review } from '../../../interfaces/review';
import { ActivatedRoute, Params } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css',
})
export class CommentsComponent implements OnInit {
  reviews: Review[] = [];
  storyId: string | number = '';

  constructor(
    private reviewsServices: ReviewsService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.storyId = params['storyId'];
    });

    this.reviewsServices.getAllReviews(this.storyId).subscribe({
      next: (reviews: any) => {
        this.reviews = reviews.data;
        console.log('reviews', this.reviews);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  postReview() {}
}
