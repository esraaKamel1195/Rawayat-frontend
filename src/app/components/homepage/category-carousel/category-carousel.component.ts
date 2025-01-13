import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CategoryService } from '../../../services/category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../../../interfaces/category';
import { Tag } from '../../../interfaces/tag';

@Component({
  selector: 'app-category-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-carousel.component.html',
  styleUrl: './category-carousel.component.css',
})
export class CategoryCarouselComponent implements OnInit {
  currentIndex: number = 0;
  tags_Show: boolean = false;
  categories: Category[] = [];
  tags: Tag [] = [];
  @Output() onCategoryChange: EventEmitter<number> = new EventEmitter<number>();
  @Output() onTagChange: EventEmitter<number> = new EventEmitter<number>();

  constructor(
    private route: Router,
    private activatedRoute: ActivatedRoute,
    private categoryService: CategoryService,
  ) {}

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe((data) => {
      this.categories = data;
    });
  }

  get visibleCategories() {
    const visible: Category[] = [];
    for (let i = 0; i < 6; i++) {
      visible.push(
        this.categories[(this.currentIndex + i) % this.categories.length]
      );
    }
    return visible;
  }

  next() {
    if (this.currentIndex < this.categories.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.categories.length - 1;
    }
  }

  goToCategoryPage(cat_id: number) {
    this.onCategoryChange.emit(cat_id);
    if( !this.route.url.includes(`/stories-by-category`) ) {
      this.route.navigateByUrl(`stories-by-category/${cat_id}`);
    } else {
      this.categoryService.getTagsByCategory(cat_id).subscribe({
        next: (tags) => {
          this.tags_Show = true;
          console.log('tags', tags);
          this.tags = tags;
        }, error: (error) => {
          console.log(error);
        }
      });
    }
  }

  getStoriesByTag(tagId: number) {
    this.onTagChange.emit(tagId);
  }
}
