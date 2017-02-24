import { Routes } from '@angular/router';
import { TestComponent } from './app/test.component';

export const AppRoutes: Routes = [
  { path: '', component: TestComponent },
  { path: 'test', component: TestComponent }
];
