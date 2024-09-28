import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class YoutubeVideosService {
  http = inject(HttpClient);
  videos = signal<any[]>([]);  // Signal to hold videos
  error = signal<string | null>(null);  // Signal to hold error messages

  private API_KEY = 'AIzaSyCFQazIgEawN5Hx4pXoh6iVLxnSmhLpiRY';
  private baseUrl = 'https://www.googleapis.com/youtube/v3';

  constructor() {}

  // Method to search videos based on a query
  fetchVideos(query: string) {
    // Clear previous videos and errors
    this.videos.set([]);
    this.error.set(null);

    const searchUrl = `${this.baseUrl}/search?key=${this.API_KEY}&part=snippet&type=video&maxResults=25&q=${encodeURIComponent(query)}`;

    this.http.get<any>(searchUrl).pipe(
      catchError((error) => {
        // Handle error response from YouTube API
        const errorMessage = error?.error?.error?.message || 'An error occurred';
        this.error.set(errorMessage);
        return throwError(() => new Error(errorMessage));
      })
    ).subscribe((response) => {
      if (response?.items?.length) {
        // Add videoId to each video object
        const videosWithId = response.items.map((item: any) => ({
          ...item,
          videoId: item.id?.videoId,  // Extract video ID from the response
        }));

        // Set fetched videos if available
        this.videos.set(videosWithId);
        console.log("videosWithId: ", videosWithId);
      } else {
        // Set error if no videos found
        this.error.set('No videos found for the query.');
      }
    });
  }
}
