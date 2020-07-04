import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TseComponent } from './tse/tse.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'support',
    component: TseComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
