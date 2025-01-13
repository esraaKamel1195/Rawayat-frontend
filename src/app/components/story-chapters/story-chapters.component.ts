import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChapterComponent } from "./chapter/chapter.component";
import { StoryComponent } from "./story/story.component";

@Component({
  selector: 'app-story-chapters',
  standalone: true,
  imports: [RouterModule, ChapterComponent, StoryComponent],
  templateUrl: './story-chapters.component.html',
  styleUrl: './story-chapters.component.css'
})
export class StoryChaptersComponent {

}
