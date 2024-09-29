import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './home/home.component';
import { SkillsCareerComponent } from './skills-career/skills-career.component';
import { ContactComponent } from './contact/contact.component';
import { YoutubeService } from './services/youtube.service';
import { RoadmapComponent } from './roadmap/roadmap.component';
import { YoutubeVideosComponent } from './youtube-videos/youtube-videos.component';
import {MatCardModule} from '@angular/material/card';
// import { FormsModule } from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { SummerizerComponent } from './summerizer/summerizer.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SkillsCareerComponent,
    ContactComponent,
    RoadmapComponent,
    YoutubeVideosComponent,
    SummerizerComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatProgressSpinnerModule
  ],
  providers: [YoutubeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
