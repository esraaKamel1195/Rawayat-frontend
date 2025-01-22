import { Routes } from '@angular/router';
import { AuthGuard } from '../services/auth/auth.guard';

export const adminRoutes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    data: { role: ['admin'] },
    loadComponent: () =>
      import('../../app/admin/admin.component').then(
        (mod) => mod.AdminComponent
      ),
    children: [
      {
        path: 'users',
        canActivate: [AuthGuard],
        data: { role: ['admin'] },
        loadComponent: () =>
          import('../../app/admin/users/users.component').then(
            (mod) => mod.UsersComponent
          ),
      },

      {
        path: 'categories',
        canActivate: [AuthGuard],
        data: { role: ['admin'] },
        loadComponent: () =>
          import(
            '../../app/admin/category/show-all-categories/show-all-categories.component'
          ).then((mod) => mod.ShowAllCategoriesComponent),
      },

      {
        path: 'category/create',
        canActivate: [AuthGuard],
        data: { role: ['admin'] },
        loadComponent: () =>
          import(
            '../../app/admin/category/create-category/create-category.component'
          ).then((mod) => mod.CreateCategoryComponent),
      },

      {
        path: 'category/update/:id',
        canActivate: [AuthGuard],
        data: { role: ['admin'] },
        loadComponent: () =>
          import(
            '../../app/admin/category/create-category/create-category.component'
          ).then((mod) => mod.CreateCategoryComponent),
      },

      {
        path: 'stories',
        canActivate: [AuthGuard],
        data: { role: ['admin'] },
        loadComponent: () =>
          import('./story/stories-list/stories-list.component').then(
            (mod) => mod.StoriesListComponent
          ),
      },

      {
        path: 'deleted-stories',
        canActivate: [AuthGuard],
        data: { role: ['admin'] },
        loadComponent: () =>
          import('./story/stories-list/stories-list.component').then(
            (mod) => mod.StoriesListComponent
          ),
      },

      {
        path: 'story/create',
        canActivate: [AuthGuard],
        data: { role: ['admin'] },
        loadComponent: () =>
          import('./story/create-story/create-story.component').then(
            (mod) => mod.CreateStoryComponent
          ),
      },

      {
        path: 'story/edit',
        canActivate: [AuthGuard],
        data: { role: ['admin'] },
        loadComponent: () =>
          import('./story/create-story/create-story.component').then(
            (mod) => mod.CreateStoryComponent
          ),
      },

      {
        path: 'tags/:categoryId',
        canActivate: [AuthGuard],
        data: { role: ['admin'] },
        loadComponent: () =>
          import('./tags/tags/tags.component').then(
            (mod) => mod.TagsComponent
          ),
      },

      {
        path: 'reviews/:categoryId',
        canActivate: [AuthGuard],
        data: { role: ['admin'] },
        loadComponent: () =>
          import('./reviews/reviews/reviews.component').then(
            (mod) => mod.ReviewsComponent
          ),
      },

      {
        path: 'start-reading',
        canActivate: [AuthGuard],
        data: { role: ['admin'] },
        loadComponent: () =>
          import('./start-reading/start-reading/start-reading.component').then(
            (mod) => mod.StartReadingComponent
          ),
      },

      {
        path: 'reading-later',
        canActivate: [AuthGuard],
        data: { role: ['admin'] },
        loadComponent: () =>
          import('./reading-later/reading-later/reading-later.component').then(
            (mod) => mod.ReadingLaterComponent
          ),
      },

      {
        path: 'contacts',
        canActivate: [AuthGuard],
        data: { role: ['admin'] },
        loadComponent: () =>
          import('../../app/admin/contact/contact.component').then(
            (mod) => mod.ContactComponent
          ),
      },
    ],
  },
];
