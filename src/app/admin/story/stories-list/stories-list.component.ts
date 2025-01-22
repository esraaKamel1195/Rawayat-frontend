import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { StoryService } from '../../../services/story.service';
import { Story } from '../../../interfaces/story';

@Component({
  selector: 'app-stories-list',
  standalone: true,
  imports: [CommonModule, MatPaginatorModule, MatTableModule],
  templateUrl: './stories-list.component.html',
  styleUrl: './stories-list.component.css'
})
export class StoriesListComponent implements OnInit, AfterViewInit {
  stories: Story[] = [];
  displayedColumns: string[] = ['title', 'category', 'publication_status', 'symbol', 'Actions'];
  dataSource = new MatTableDataSource<Story>(this.stories);

  @ViewChild(MatPaginator) paginator?: MatPaginator;

  constructor(
    private router: Router,
    private storyService: StoryService
  ) {}

  ngOnInit(): void {
    this.storyService.getAllStories().subscribe({
      next: (response: any) => {
        console.log('stories', response);
        this.stories = response;
      },
      error: (error: any) => {
        console.error('Error retrieving contacts:', error);
      },
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator? this.paginator: null;
  }

  editView(id: number = 0) {
    console.log('Editing category with ID:', id);
    this.router.navigate([`category/update/${id}`]);
  }

  viewStory(id: number = 0) {
    this.router.navigate([`story/${id}/details`]);
  }

  deleteStory(id: number = 0) {
    if (confirm('Are you sure you want to delete this story?')) {
      this.storyService.deleteStory(id).subscribe({
        next: () => {
          alert('Story deleted successfully!');
          this.stories = this.stories.filter(
            (story) => story.id !== id
          );
        },
        error: (error) => {
          console.log(error);
          alert('Failed to delete story. Please try again.');
        },
      });
    }
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
];
