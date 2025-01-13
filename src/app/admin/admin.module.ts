import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { adminRoutes } from './admin.routes';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(adminRoutes)],
})
export class AdminModule {}
