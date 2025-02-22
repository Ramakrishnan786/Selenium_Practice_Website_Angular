import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { CLICKS_ROUTES } from './features/clicks/clicks.routes';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadComponent: () => import('./features/auth/components/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'signup',
    loadComponent: () => import('./features/auth/components/signup/signup.component').then(m => m.SignupComponent)
  },
  {
    path: '',
    canActivate: [authGuard],
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./features/dashboard/dashboard.component').then(m => m.DashboardComponent),
        children: [
          ...CLICKS_ROUTES
        ]
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];
