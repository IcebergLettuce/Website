import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavigationComponent } from './navigation/navigation.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { ReadingListComponent } from './pages/reading-list/reading-list.component';
import { RouterModule, Routes } from '@angular/router';
import { IconsComponent } from './navigation/icons/icons.component';
import { ShakeComponent } from './navigation/shake/shake.component';
import { HomeButtonComponent } from './home-button/home-button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SideProjectsComponent } from './pages/side-projects/side-projects.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PmProjectComponent } from './pages/side-projects/projects/pm-project/pm-project.component';
import { TspProjectComponent } from './pages/side-projects/projects/tsp-project/tsp-project.component';
import { AqProjectComponent } from './pages/side-projects/projects/aq-project/aq-project.component';
import { InfraProjectComponent } from './pages/side-projects/projects/infra-project/infra-project.component';
import { AqTooltipComponent } from './aq-tooltip/aq-tooltip.component';

const routes: Routes = [
  { path: 'home', component: NavigationComponent ,data: { animation: 'HomePage'}},
  { path: 'reading', component: ReadingListComponent,data: { animation: 'ContentPage'}},
  { path: 'projects', component: SideProjectsComponent  ,data: { animation: 'ContentPage'} },
  { path: 'projects/1', component: PmProjectComponent  ,data: { animation: 'ContentPage'} },
  { path: 'projects/2', component: AqProjectComponent  ,data: { animation: 'ContentPage'} },

 { path: '',   redirectTo: '/home', pathMatch: 'full'}, // redirect to `first-component`
//  { path: '**',   redirectTo: '/home', pathMatch: 'full'}, // redirect to `first-component`

];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    TooltipComponent,
    SideProjectsComponent,
    ReadingListComponent,
    IconsComponent,
    ShakeComponent,
    HomeButtonComponent,
    PmProjectComponent,
    TspProjectComponent,
    AqTooltipComponent,
    AqProjectComponent,
    InfraProjectComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
