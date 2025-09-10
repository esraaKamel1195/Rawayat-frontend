import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Params, RouterModule } from '@angular/router';
import { StoryComponent } from "./story/story.component";
import { Chapter } from '../../interfaces/chapter';
import { ChaptersService } from '../../services/chapters.service';

@Component({
  selector: 'app-story-chapters',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    StoryComponent
  ],
  templateUrl: './story-chapters.component.html',
  styleUrl: './story-chapters.component.css'
})
export class StoryChaptersComponent implements OnInit {
  chapters: Array<Chapter> = [];
  storyId: string | number = '';

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly chaptersServices: ChaptersService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.storyId = params['storyId'];
    });

    this.chaptersServices.chapterIndex(this.storyId).subscribe({
      next: (chapters: any) => {
        console.log('chapters', chapters);
        this.chapters = chapters.data;
      }, error: (error) => {
        console.log(error);
      }
    });
  }
}
