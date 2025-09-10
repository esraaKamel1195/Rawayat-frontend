import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Chapter } from '../../../interfaces/chapter';
import { ChaptersService } from '../../../services/chapters.service';

@Component({
  selector: 'app-story',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './story.component.html',
  styleUrl: './story.component.css'
})
export class StoryComponent implements OnInit {
  isOpen = true;
  storyId: string | number = '';
  storyName: string = '';
  chapters: Array<Chapter> = [];

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly chaptersServices: ChaptersService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.storyId = params['storyId'];
      this.storyName = params['storyName'];
    });

    this.chaptersServices.chapterIndex(this.storyId).subscribe({
      next: (chapters: any) => {
        console.log('story chapters', chapters);
        this.chapters = chapters.data;
      }, error: (error) => {
        console.log(error);
      }
    });
  }

  toggleSideNav(): void {
    this.isOpen = !this.isOpen;
  }
}
