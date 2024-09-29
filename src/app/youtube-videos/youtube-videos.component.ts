import { Component, OnInit, inject, computed } from '@angular/core';
import { YoutubeVideosService } from '../services/youtube-videos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-youtube-videos',
  templateUrl: './youtube-videos.component.html',
  styleUrl: './youtube-videos.component.css',
})
export class YoutubeVideosComponent implements OnInit {
  template = {
    kind: 'youtube#searchResult',
    etag: 'Fvcv8JTXySk6QgF3moVeiDBE5W0',
    id: {
      kind: 'youtube#playlist',
      playlistId: 'PLC3y8-rFHvwhBRAgFinJR8KHIrCdTkZcZ',
    },
    snippet: {
      publishedAt: '2017-11-20T14:33:18Z',
      channelId: 'UC80PWRj_ZU8Zu0HSMNVwKWw',
      title: 'Angular Tutorial For Beginners',
      description:
        'Angular is a TypeScript-based open-source front-end web application platform led by the Angular Team at Google and by a ...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/0eWrpsCLMJQ/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/0eWrpsCLMJQ/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/0eWrpsCLMJQ/hqdefault.jpg',
          width: 480,
          height: 360,
        },
      },
      channelTitle: 'Codevolution',
      liveBroadcastContent: 'none',
      publishTime: '2017-11-20T14:33:18Z',
    },
  };
  loading: boolean = false;
  videoService = inject(YoutubeVideosService); // Inject the video service
  videos = computed(() => this.videoService.videos()); // Watch the videos signal
  error = computed(() => this.videoService.error()); // Watch the error signal

  selectedCourse!: number;
  selectedBranch!: number;
  selectedRole!: number;
  selectRoadmapName :any;

  constructor( private activatedRoute: ActivatedRoute,private router: Router) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.selectedCourse = params['course'];
      this.selectedBranch = params['branch'];
      this.selectedRole = params['role'];
      this.selectRoadmapName = params['roadmapId'];
    });
    console.log("ttt",this.selectRoadmapName)
    // Initially fetch videos based on a search query, e.g., 'Angular tutorials'
    // this.searchVideos('this.selectRoadmapName');
    // Correctly pass the variable's value to the searchVideos method
  if (this.selectRoadmapName) {
    this.searchVideos(this.selectRoadmapName); // Remove quotes to pass the variable
  } 
  }

  searchVideos(query: string): void {
    this.videoService.fetchVideos(query);
  }


  navigateForSummerize(){
    this.router.navigate(['/summerizer'])
  }
}
