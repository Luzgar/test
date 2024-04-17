import { Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';

export const routes: Routes = [
  {
    path: 'tab1-nav',
    loadComponent: () =>
      import('./tab1-test/tab1-nav.page').then((m) => m.Tab1TestPage),
  },
  {
    path: '',
    component: Tab1Page,
  },
];
