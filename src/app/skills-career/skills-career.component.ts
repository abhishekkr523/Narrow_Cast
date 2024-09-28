import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RolesService } from '../services/roles.service';
import { RoadmapService } from '../services/roadmap.service';

@Component({
  selector: 'app-skills-career',
  templateUrl: './skills-career.component.html',
  styleUrls: ['./skills-career.component.css']
})
export class SkillsCareerComponent implements OnInit {
  selectedCourse!: number;
  selectedBranch!: number;
  selectedRole!: number;

 

  roles: any[] = [];
  roadmaps: any[] = [];

  constructor(private activatedRoute: ActivatedRoute,private roleService: RolesService,private roadmapService: RoadmapService,private router: Router,) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.selectedCourse = params['course'];
      this.selectedBranch = params['branch'];
      this.selectedRole = params['role']
      console.log(this.selectedCourse, this.selectedBranch);
    });

    this.loadRoles();
    this.getRoadmaps();
  }

  loadRoles(): void {
    this.roleService.getRoles(this.selectedCourse, this.selectedBranch).subscribe(
      (data) => {
        this.roles = data; // Store the response data
        console.log("dataata",this.roles)
      },
      (error) => {
        console.error('Error fetching roles:', error);
      }
    );
  }

  

  getRoadmaps(): void {
    this.roadmapService.getRoadmapByCourseBranchRole(
      this.selectedCourse,
      this.selectedBranch,
      this.selectedRole
    ).subscribe(
      (data) => {
        // Convert object to array if needed
        this.roadmaps = Array.isArray(data) ? data : [data];

        // Parse the steps for each roadmap
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

   // Function to navigate with the role_id as a query parameter
   navigateToRole(roleId: number): void {
    this.router.navigate([], {
      queryParams: {
        course: this.selectedCourse,
        branch: this.selectedBranch,
        role: roleId,
      },
      queryParamsHandling: 'merge', // This will keep the current query parameters and merge the new ones
    });
  }
}