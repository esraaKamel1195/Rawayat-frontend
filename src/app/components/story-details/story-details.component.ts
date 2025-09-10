import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from './comments/comments.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MatChipsModule } from '@angular/material/chips';
import { Story } from '../../interfaces/story';
import { StoryService } from '../../services/story.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { BookCollectionComponent } from "../homepage/book-collection/book-collection.component";

@Component({
  selector: 'app-story-details',
  standalone: true,
  imports: [
    CommonModule,
    CommentsComponent,
    MatFormFieldModule,
    RouterModule,
    MatTabsModule,
    MatChipsModule,
    MatCardModule,
    MatButtonModule,
    BookCollectionComponent
],
  templateUrl: './story-details.component.html',
  styleUrl: './story-details.component.css',
})
export class StoryDetailsComponent implements OnInit {
  storyId: string | number = 0;
  storyDetails: Story = { id: 0, title: '' };

  constructor(
    private readonly ActivatedRouter: ActivatedRoute,
    private readonly router: Router,
    private readonly storyService: StoryService
  ) {}

  ngOnInit(): void {
    this.ActivatedRouter.params.subscribe((params: Params) => {
      this.storyId = params['storyId'];
    });

    this.storyService.storyDetails(this.storyId).subscribe({
      next: (res) => {
        console.log('storyDetails', res);
        this.storyDetails = res;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  onReadLater() {
    this.storyService.readLaterStore(this.storyDetails?.id).subscribe({
      next: (response) => {
        console.log(response);
        alert('set to read later successfully');
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  readStory(id: number | string, name: string) {
    this.router.navigateByUrl(`story/${id}/${name}/read`);
  }

  //review
  onSubmit() {
    const review = (document.getElementById('review') as HTMLTextAreaElement)
      .value;
    console.log('Submitted Review:', review);
  }
}
