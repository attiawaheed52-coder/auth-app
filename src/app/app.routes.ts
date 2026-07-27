import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'signup',
    pathMatch: 'full'
  },

  {
  path: 'signup',
  loadComponent: () =>
    import('./pages/signup/signup')
    .then(m => m.SignupComponent)
},

  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login')
      .then(m => m.LoginComponent)
  },

  {
    path: 'forgot-password',
    loadComponent: () =>
      import('./pages/forgot-password/forgot-password')
      .then(m => m.ForgotPasswordComponent)
  },

  {
    path: 'profile',
    loadComponent: () =>
      import('./pages/profile/profile')
      .then(m => m.ProfileComponent)
  }
];

