import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Params, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { StoryService } from '../../../services/story.service';
import { Story } from '../../../interfaces/story';
import { CategoryCarouselComponent } from '../../homepage/category-carousel/category-carousel.component';

@Component({
  selector: 'app-stories',
  standalone: true,
  imports: [
    RouterModule,
    MatButtonModule,
    MatCardModule,
    CommonModule,
    CategoryCarouselComponent,
  ],
  templateUrl: './stories.component.html',
  styleUrl: './stories.component.css',
})
export class StoriesComponent implements OnInit {
  stories: Story [] = [];
  tagId: string | number = 0;
  categoryId: string | number = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private storyService: StoryService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.categoryId = params['category_id'];
    });

    if (this.router.url.includes(`stories/latest-stories`)) {
      this.storyService.getAdvertisementStoryByLatestStory().subscribe({
        next: (stories: Story[]) => {
          console.log('latest', stories);
          this.stories = stories;
        },
        error: (error) => {
          console.log(error);
        },
      });
    } else if (this.router.url.includes(`stories/popular-stories`)) {
      this.storyService.getTopStoriesByViews().subscribe({
        next: (stories: Story[]) => {
          console.log('top stories by views', stories);
          this.stories = stories;
        },
        error: (error) => {
          console.log(error);
        },
      });
    } else if (this.categoryId && this.categoryId !== 0) {
      this.categoryChange();
    }

    // this.storyService.getStoriesByTag(this.tagId).subscribe({
    //   next: (stories: Story[]) => {
    //     console.log('top stories by views', stories);
    //     this.stories = stories;
    //   },
    //   error: (error) => {
    //     console.log(error);
    //   },
    // });
  }

  categoryChange(event: number | null = null) {
    console.log('event', event);
    this.storyService.getStoriesByCategory(event? event : this.categoryId).subscribe({
      next: (stories: Story[]) => {
        console.log('by category', stories);
        this.stories = stories;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
