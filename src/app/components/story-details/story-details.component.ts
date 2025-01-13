import { Component, OnInit } from '@angular/core';
import { CommentsComponent } from './comments/comments.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MatChipsModule } from '@angular/material/chips';
import { Story } from '../../interfaces/story';
import { StoryService } from '../../services/story.service';
import { CommonModule } from '@angular/common';

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
  ],
  templateUrl: './story-details.component.html',
  styleUrl: './story-details.component.css',
})
export class StoryDetailsComponent implements OnInit {
  storyId: string | number = 0;
  storyDetails: Story = {id: 0};

  constructor(
    private ActivatedRouter: ActivatedRoute,
    private router: Router,
    private storyService: StoryService
  ) {}

  ngOnInit(): void {
    this.ActivatedRouter.params.subscribe((params: Params) => {
      this.storyId = params['storyId'];
    });

    this.storyService.storyDetails(this.storyId).subscribe({
      next: (res) => {
        console.log('storyDetails', res);
        this.storyDetails = res;
      }, error: (error) => {
        console.log(error);
      }
    });
  }

  onReadLater() {
    this.storyService.readLaterStore(this.storyDetails?.id).subscribe({
      next: (response) => {
        console.log(response);
        alert('set to read later successfully');
      }, error: (error) => {
        console.log(error);

      }
    })
  }

  readStory(id: number | string) {
    this.router.navigateByUrl(`story/${id}/read`);
  }

  //review
  onSubmit() {
    const review = (document.getElementById('review') as HTMLTextAreaElement)
      .value;
    console.log('Submitted Review:', review);
  }
}
