import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  EditorChangeContent,
  EditorChangeSelection,
  QuillModule,
} from 'ngx-quill';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-create-chapter',
  imports: [
    RouterModule,
    QuillModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './create-chapter.component.html',
  styleUrl: './create-chapter.component.css',
  standalone: true,
})
export class CreateChapterComponent {
  changedEditor(event: EditorChangeContent | EditorChangeSelection) {
    console.log('Editor changed:', event);
  }
}
