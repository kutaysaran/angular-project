import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { BusinessComponent } from './components/business/business.component';
import { EntertainmentComponent } from './components/entertainment/entertainment.component';
import { GeneralComponent } from './components/general/general.component';
import { HealthComponent } from './components/health/health.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ScienceComponent } from './components/science/science.component';
import { SportsComponent } from './components/sports/sports.component';
import { TechnologyComponent } from './components/technology/technology.component';
import { PublicHeaderComponent } from './components/public-header/public-header.component';
import { SearchComponent } from './components/search/search.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AboutComponent,
    BusinessComponent,
    EntertainmentComponent,
    GeneralComponent,
    HealthComponent,
    ScienceComponent,
    SportsComponent,
    TechnologyComponent,
    PublicHeaderComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }