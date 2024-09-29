import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-summerizer',
  templateUrl: './summerizer.component.html',
  styleUrls: ['./summerizer.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 })),
      ]),
    ]),
    trigger('slideIn', [
      transition(':enter', [
        style({ transform: 'translateY(50px)', opacity: 0 }),
        animate('300ms', style({ transform: 'translateY(0)', opacity: 1 })),
      ]),
    ]),
  ],
})
export class SummerizerComponent {
  videoUrl: string = '';
  summary: string = '';
  loading: boolean = false;
  error: string = '';

  summarizeVideo() {
    if (!this.videoUrl) {
      this.error = 'Please enter a valid YouTube URL';
      return;
    }
    this.loading = true;
    this.error = '';
    this.summary = '';

    // Simulating API call with setTimeout
    setTimeout(() => {
      this.loading = false;
      // Replace this with actual API call to get the summary
      this.summary = 'This is a placeholder summary for the video. In a real application, this would be the result of processing and summarizing the content of the YouTube video URL provided.';
    }, 2000);
  }
}