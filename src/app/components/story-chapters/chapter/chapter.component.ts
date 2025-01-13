import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ChaptersService } from '../../../services/chapters.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Chapter } from '../../../interfaces/chapter';

@Component({
  selector: 'app-chapter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chapter.component.html',
  styleUrl: './chapter.component.css'
})
export class ChapterComponent implements OnInit {
  isOpen = true;
  storyId: string | number = '';
  chapters: Array<Chapter> = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private chaptersServices: ChaptersService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.storyId = params['storyId'];
    });

    this.chaptersServices.chapterIndex(this.storyId).subscribe({
      next: (chapters: any) => {
        console.log('chapters', chapters);
        this.chapters = chapters;
      }, error: (error) => {
        console.log(error);
      }
    });
  }

  toggleSideNav(): void {
    this.isOpen = !this.isOpen;
  }
}
