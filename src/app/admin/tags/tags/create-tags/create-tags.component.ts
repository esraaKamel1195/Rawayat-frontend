import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Tag } from '../../../../interfaces/tag';
import { CategoryService } from '../../../../services/category.service';

@Component({
  selector: 'app-create-tags',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
  ],
  templateUrl: './create-tags.component.html',
  styleUrl: './create-tags.component.css',
})
export class CreateTagsComponent implements OnInit {
  tagForm: FormGroup = new FormGroup({}); //form data and validation
  tag: Tag = { id: '', name: '' };

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.tagForm = new FormGroup({
      tag_id: new FormControl(
        this.activatedRoute.snapshot.params['id']
          ? this.activatedRoute.snapshot.params['id']
          : null,
        []
      ),
      tag_name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
    });

    // if (this.activatedRoute.snapshot.params['id']) {
    //   this.categoryService
    //     .show(this.activatedRoute.snapshot.params['id'])
    //     .subscribe({
    //       next: (tag: any) => {
    //         this.tag = tag.data;
    //         this.tagForm.patchValue({
    //           tag_name: this.tag.name,
    //         });
    //       },
    //       error: (error) => {
    //         console.log('error', error);
    //       },
    //     });
    // }
  }

  onSubmit() {
    if (this.tagForm.valid) {
      if (this.activatedRoute.snapshot.params['id']) {
        this.categoryService
          .updateCategory(
            this.tagForm.value.tag_id,
            this.tagForm.value.tag_name
          )
          .subscribe({
            next: (response) => {
              alert('Updated successfully');
              this.tagForm.reset();
              this.router.navigateByUrl(`admin/tags`);
            },
            error: (error) => {
              alert('Failed to add tag. Please try again.');
            },
          });
      } else {
        this.categoryService
          .addTagStore(this.tagForm.value.tag_name)
          .subscribe({
            next: (response) => {
              alert('added successfully');
              this.tagForm.reset();
              this.router.navigateByUrl(`admin/tags`);
            },
            error: (error) => {
              alert('Failed to add tag. Please try again.');
            },
          });
      }
    } else {
      alert('Please enter a valid tag name.');
    }
  }
}
