import { Routes } from '@angular/router';
import { AuthGuard } from './services/auth/auth.guard';
// import { AuthGuard } from './auth/auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../app/components/homepage/homepage.component').then(
        (mod) => mod.HomepageComponent
      ),
  },

  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth.module').then((mod) => mod.AuthModule),
  },

  {
    path: 'home',
    loadComponent: () =>
      import('../app/components/homepage/homepage.component').then(
        (mod) => mod.HomepageComponent
      ),
  },

  {
    path: 'profile',
    canActivate: [AuthGuard],
    data: { role: ['reader', 'admin'] },
    loadComponent: () =>
      import('../app/user/profile/profile.component').then(
        (mod) => mod.ProfileComponent
      ),
  },

  {
    path: 'stories/latest-stories',
    loadComponent: () =>
      import('../app/components/stories/stories/stories.component').then(
        (mod) => mod.StoriesComponent
      ),
  },

  {
    path: 'stories/popular-stories',
    loadComponent: () =>
      import('../app/components/stories/stories/stories.component').then(
        (mod) => mod.StoriesComponent
      ),
  },

  {
    path: 'stories-by-category/:category_id',
    loadComponent: () =>
      import('../app/components/stories/stories/stories.component').then(
        (mod) => mod.StoriesComponent
      ),
  },

  {
    path: 'stories-by-tags/:tag_id',
    loadComponent: () =>
      import('../app/components/stories/stories/stories.component').then(
        (mod) => mod.StoriesComponent
      ),
  },

  {
    path: 'story/:storyId/details',
    canActivate: [AuthGuard],
    data: { role: ['reader', 'admin'] },
    loadComponent: () =>
      import('../app/components/story-details/story-details.component').then(
        (mod) => mod.StoryDetailsComponent
      ),
  },

  {
    path: 'story/:storyId/read',
    canActivate: [AuthGuard],
    data: { role: ['reader', 'admin'] },
    loadComponent: () =>
      import('../app/components/story-chapters/story-chapters.component').then(
        (mod) => mod.StoryChaptersComponent
      ),
  },

  {
    path: 'admin',
    canActivate: [AuthGuard],
    data: { role: ['admin'] },
    canActivateChild: [],
    loadChildren: () =>
      import('../app/admin/admin.module').then((mod) => mod.AdminModule),
  },

  {
    path: 'about',
    loadComponent: () =>
      import('../app/components/about/about.component').then(
        (mod) => mod.AboutComponent
      ),
  },

  {
    path: 'contact',
    loadComponent: () =>
      import('../app/components/contact-us/contact-us.component').then(
        (mod) => mod.ContactUsComponent
      ),
  },

  {
    path: '**',
    loadComponent: () =>
      import('../app/components/error/error.component').then(
        (mod) => mod.ErrorComponent
      ),
  },
];
