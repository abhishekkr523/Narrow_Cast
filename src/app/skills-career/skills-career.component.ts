import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RolesService } from '../services/roles.service';
import { RoadmapService } from '../services/roadmap.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-skills-career',
  templateUrl: './skills-career.component.html',
  styleUrls: ['./skills-career.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 })),
      ]),
    ]),
    trigger('scaleIn', [
      transition(':enter', [
        style({ transform: 'scale(0.5)', opacity: 0 }),
        animate('300ms', style({ transform: 'scale(1)', opacity: 1 })),
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
export class SkillsCareerComponent implements OnInit {
  selectedCourse!: number;
  selectedBranch!: number;
  selectedRole!: number;
  visibility:boolean=true;

  roles: any[] = []; // Your roles data
  roadmaps: any[] = []; // Your roadmaps data
  selectedRolem: any = null;

  constructor(private activatedRoute: ActivatedRoute,private roleService: RolesService,private roadmapService: RoadmapService,private router: Router,) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.selectedCourse = params['course'];
      this.selectedBranch = params['branch'];
      this.selectedRole = params['role']
      console.log(this.selectedCourse, this.selectedBranch);
    });

    this.loadRoles();
    // this.getRoadmaps();
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


  
  navigateToRoadmap(roleId: number,roleName: string): void {
    this.router.navigate(['/roadmap'], { // Update this route to match your roadmap component route
      queryParams: {
        course: this.selectedCourse,
        branch: this.selectedBranch,
        role: roleId,
        roleName: roleName,
      },
    });
    this.visibility = false; // Hide the roles section when navigating
  }
  

  selectRole(role: any): void {
    this.selectedRole = role;
    // Here you would typically fetch the roadmaps for the selected role
    // For now, we'll just use the existing roadmaps
  }

  deselectRole(): void {
    this.selectedRolem = null;
  }

  getRoleIcon(roleName: string): string {
    // Map role names to appropriate Font Awesome icons
    const iconMap: { [key: string]: string } = {
      'Developer': 'fas fa-code',
      'Designer': 'fas fa-paint-brush',
      'Manager': 'fas fa-tasks',
      'Analyst': 'fas fa-chart-line',
      // Add more mappings as needed
    };

    return iconMap[roleName] || 'fas fa-user-tie'; // Default icon
  }

  goBack(): void {
    this.visibility = true;
    // Clear any selected role or roadmap data if necessary
  }
}