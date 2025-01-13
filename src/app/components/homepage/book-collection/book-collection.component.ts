import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { StoryService } from '../../../services/story.service';
import { Story } from '../../../interfaces/story';

@Component({
  selector: 'app-book-collection',
  standalone: true,
  imports: [
    RouterModule, CommonModule, MatCardModule, MatButtonModule
  ],
  templateUrl: './book-collection.component.html',
  styleUrl: './book-collection.component.css',
})
export class BookCollectionComponent implements OnInit {
  visibleStories: Story [] = [];
  booksPerPage: number [] = [];
  stories: Array<Story> = [];
  @Input({ required: true }) title: string = '';
  @Input({ required: true }) routingItem: string = '';

  constructor(
    private router: Router,
    private storiesServices: StoryService
  ) {
  }

  ngOnInit(): void {
    if(this.router.url.includes(`stories/latest-stories`)) {
      this.storiesServices.getAdvertisementStoryByLatestStory().subscribe({
        next: (res) => {
          console.log('latest', res);
          this.stories = res;
          this.loadInit();
        }, error: (error) => {
          console.log(error);
        }
      });
    }

    if(this.router.url.includes(`stories/popular-stories`)) {
      this.storiesServices.getTopStoriesByViews().subscribe({
        next: (res) => {
          console.log('getTopStoriesByViews', res);
          this.stories = res;
        },
        error: (error) => {
          console.log(error);
        },
      });
    }
  }

  loadInit() {
    this.visibleStories = this.stories.slice(0, 6);
  }

  loadPrevious() {
    const startIndex = this.visibleStories.length - 6;
    this.visibleStories = this.stories.slice(startIndex, startIndex + 6);
  }

  showDetails(storyId: number | string) {
    this.router.navigateByUrl(`story/${storyId}/details`);
  }

  loadMore() {
    this.router.navigateByUrl(`story/`);
  }
}
