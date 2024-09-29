import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoadmapService } from '../services/roadmap.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-roadmap',
  templateUrl: './roadmap.component.html',
  styleUrls: ['./roadmap.component.css'],
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
    trigger('fadeInUp', [
      transition(':enter', [
        style({ transform: 'translateY(20px)', opacity: 0 }),
        animate('300ms', style({ transform: 'translateY(0)', opacity: 1 })),
      ]),
    ]),
  ],
})
export class RoadmapComponent implements OnInit {
  selectedCourse!: number;
  selectedBranch!: number;
  selectedRole!: number;
  selectedRolename!: string;
  roadmaps: any[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private roadmapService: RoadmapService,
    private router: Router
  ) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.selectedCourse = params['course'];
      this.selectedBranch = params['branch'];
      this.selectedRole = params['role'];
      this.selectedRolename = params['roleName'];
      this.getRoadmaps();
    });
  }

  getRoadmaps(): void {
    this.roadmapService.getRoadmapByCourseBranchRole(
      this.selectedCourse,
      this.selectedBranch,
      this.selectedRole
    ).subscribe(
      (data) => {
        this.roadmaps = Array.isArray(data) ? data : [data];
        this.roadmaps = this.roadmaps.map((roadmap) => ({
          ...roadmap,
          steps: roadmap.steps ? JSON.parse(roadmap.steps) : [],
        }));
        console.log('Roadmaps:', this.roadmaps);
      },
      (error) => {
        console.error('Error fetching roadmaps:', error);
      }
    );
  }

  goBack(): void {
    this.router.navigate(['/skills-career'], {
      queryParams: {
        course: this.selectedCourse,
        branch: this.selectedBranch,
      },
    });
  }


  navigateToRoadmap(roadmapId: number): void {
    this.router.navigate(['/youtube-videos'], { // Update this route to match your roadmap component route
      queryParams: {
        course: this.selectedCourse,
        branch: this.selectedBranch,
        role: this.selectedRole,
        roadmapId: roadmapId,
        roadmapName: this.selectedRolename


      },
    }); // Hide the roles section when navigating
  }
}
