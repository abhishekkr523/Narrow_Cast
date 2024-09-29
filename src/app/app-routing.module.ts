import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { SkillsCareerComponent } from './skills-career/skills-career.component';
import { ContactComponent } from './contact/contact.component';
import { RoadmapComponent } from './roadmap/roadmap.component';
import { YoutubeVideosComponent } from './youtube-videos/youtube-videos.component';
import { SummerizerComponent } from './summerizer/summerizer.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: SignupComponent },
  { path: 'skills-career', component: SkillsCareerComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'youtube-videos', component: YoutubeVideosComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'roadmap', component: RoadmapComponent },
  { path: 'summerizer', component: SummerizerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
