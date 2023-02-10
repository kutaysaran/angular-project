import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { BusinessComponent } from './components/business/business.component';
import { EntertainmentComponent } from './components/entertainment/entertainment.component';
import { GeneralComponent } from './components/general/general.component';
import { HealthComponent } from './components/health/health.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ScienceComponent } from './components/science/science.component';
import { SportsComponent } from './components/sports/sports.component';
import { TechnologyComponent } from './components/technology/technology.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
  { path: 'home', component: HomepageComponent },
  { path: 'about', component: AboutComponent  },
  { path: 'business', component: BusinessComponent },
  { path: 'general', component: GeneralComponent },
  { path: 'health', component: HealthComponent },
  { path: 'entertainment', component: EntertainmentComponent  },
  { path: 'science', component: ScienceComponent },
  { path: 'sports', component: SportsComponent  },
  { path: 'technology', component: TechnologyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
