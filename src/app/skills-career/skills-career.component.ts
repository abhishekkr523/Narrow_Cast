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
  
  staticCourseData=[
    {
      "id": 1,
      "course_name": "B-Tech/BE (Bachelor of Technology/Engineering)",
      "branches": [
        {
          "id": 1,
          "branch_name": "Computer Science Engineering",
          "roles": [
            {
              "role_id": 1,
              "role": "Software Developer"
            },
            {
              "role_id": 2,
              "role": "Data Scientist"
            },
            {
              "role_id": 3,
              "role": "Network Engineer"
            }
          ]
        },
        {
          "id": 2,
          "branch_name": "Mechanical Engineering",
          "roles": [
            {
              "role_id": 4,
              "role": "Mechanical Engineer"
            },
            {
              "role_id": 5,
              "role": "Automotive Engineer"
            },
            {
              "role_id": 6,
              "role": "Production Manager"
            }
          ]
        },
        {
          "id": 3,
          "branch_name": "Civil Engineering",
          "roles": [
            {
              "role_id": 7,
              "role": "Civil Engineer"
            },
            {
              "role_id": 8,
              "role": "Construction Manager"
            },
            {
              "role_id": 9,
              "role": "Structural Engineer"
            }
          ]
        },
        {
          "id": 4,
          "branch_name": "Electrical Engineering",
          "roles": [
            {
              "role_id": 10,
              "role": "Electrical Engineer"
            },
            {
              "role_id": 11,
              "role": "Power Systems Engineer"
            },
            {
              "role_id": 12,
              "role": "Control Engineer"
            }
          ]
        },
        {
          "id": 5,
          "branch_name": "Electronics and Communication Engineering",
          "roles": [
            {
              "role_id": 13,
              "role": "Electronics Engineer"
            },
            {
              "role_id": 14,
              "role": "Communication Engineer"
            },
            {
              "role_id": 15,
              "role": "Embedded Systems Developer"
            }
          ]
        }
      ]
    },
    {
      "id": 2,
      "course_name": "M.Tech/ME (Master of Technology/Engineering)",
      "branches": [
        {
          "id": 6,
          "branch_name": "Computer Science Engineering",
          "roles": [
            {
              "role_id": 16,
              "role": "Senior Software Engineer"
            },
            {
              "role_id": 17,
              "role": "Data Architect"
            },
            {
              "role_id": 18,
              "role": "AI Engineer"
            }
          ]
        },
        {
          "id": 7,
          "branch_name": "Mechanical Engineering",
          "roles": [
            {
              "role_id": 19,
              "role": "Mechanical Design Engineer"
            },
            {
              "role_id": 20,
              "role": "R&D Engineer"
            },
            {
              "role_id": 21,
              "role": "Manufacturing Consultant"
            }
          ]
        },
        {
          "id": 8,
          "branch_name": "Civil Engineering",
          "roles": [
            {
              "role_id": 22,
              "role": "Project Engineer"
            },
            {
              "role_id": 23,
              "role": "Structural Consultant"
            },
            {
              "role_id": 24,
              "role": "Site Manager"
            }
          ]
        }
      ]
    },
    {
      "id": 3,
      "course_name": "Diploma in Engineering",
      "branches": [
        {
          "id": 9,
          "branch_name": "Mechanical Engineering",
          "roles": [
            {
              "role_id": 25,
              "role": "Junior Mechanical Engineer"
            },
            {
              "role_id": 26,
              "role": "Maintenance Supervisor"
            },
            {
              "role_id": 27,
              "role": "CAD Technician"
            }
          ]
        },
        {
          "id": 10,
          "branch_name": "Civil Engineering",
          "roles": [
            {
              "role_id": 28,
              "role": "Site Supervisor"
            },
            {
              "role_id": 29,
              "role": "CAD Technician"
            },
            {
              "role_id": 30,
              "role": "Assistant Engineer"
            }
          ]
        },
        {
          "id": 11,
          "branch_name": "Electrical Engineering",
          "roles": [
            {
              "role_id": 31,
              "role": "Junior Electrical Engineer"
            },
            {
              "role_id": 32,
              "role": "Electrician"
            },
            {
              "role_id": 33,
              "role": "Electrical Supervisor"
            }
          ]
        }
      ]
    },
    {
      "id": 4,
      "course_name": "BCA (Bachelor of Computer Applications)",
      "branches": [
        {
          "id": 12,
          "branch_name": "Computer Applications",
          "roles": [
            {
              "role_id": 34,
              "role": "Software Developer"
            },
            {
              "role_id": 35,
              "role": "Web Developer"
            },
            {
              "role_id": 36,
              "role": "System Analyst"
            }
          ]
        },
        {
          "id": 13,
          "branch_name": "Information Technology",
          "roles": [
            {
              "role_id": 37,
              "role": "IT Support Specialist"
            },
            {
              "role_id": 38,
              "role": "Database Administrator"
            },
            {
              "role_id": 39,
              "role": "Network Administrator"
            }
          ]
        }
      ]
    },
    {
      "id": 5,
      "course_name": "MCA (Master of Computer Applications)",
      "branches": [
        {
          "id": 14,
          "branch_name": "Computer Applications",
          "roles": [
            {
              "role_id": 40,
              "role": "Software Architect"
            },
            {
              "role_id": 41,
              "role": "Data Analyst"
            },
            {
              "role_id": 42,
              "role": "Application Developer"
            }
          ]
        },
        {
          "id": 15,
          "branch_name": "Information Technology",
          "roles": [
            {
              "role_id": 43,
              "role": "IT Consultant"
            },
            {
              "role_id": 44,
              "role": "Systems Manager"
            },
            {
              "role_id": 45,
              "role": "Database Architect"
            }
          ]
        }
      ]
    },
    {
      "id": 6,
      "course_name": "MBBS (Bachelor of Medicine and Bachelor of Surgery)",
      "branches": [
        {
          "id": 16,
          "branch_name": "General Medicine",
          "roles": [
            {
              "role_id": 46,
              "role": "General Practitioner"
            },
            {
              "role_id": 47,
              "role": "Physician"
            }
          ]
        },
        {
          "id": 17,
          "branch_name": "Surgery",
          "roles": [
            {
              "role_id": 48,
              "role": "Surgeon"
            },
            {
              "role_id": 49,
              "role": "Medical Specialist"
            }
          ]
        },
        {
          "id": 18,
          "branch_name": "Pediatrics",
          "roles": [
            {
              "role_id": 50,
              "role": "Pediatrician"
            },
            {
              "role_id": 51,
              "role": "Child Specialist"
            }
          ]
        }
      ]
    },
    {
      "id": 7,
      "course_name": "BDS (Bachelor of Dental Surgery)",
      "branches": [
        {
          "id": 19,
          "branch_name": "Dental Surgery",
          "roles": [
            {
              "role_id": 52,
              "role": "Dentist"
            },
            {
              "role_id": 53,
              "role": "Oral Surgeon"
            }
          ]
        },
        {
          "id": 20,
          "branch_name": "Orthodontics",
          "roles": [
            {
              "role_id": 54,
              "role": "Orthodontist"
            },
            {
              "role_id": 55,
              "role": "Dental Specialist"
            }
          ]
        }
      ]
    },
    {
      "id": 8,
      "course_name": "BHMS (Bachelor of Homeopathic Medicine and Surgery)",
      "branches": [
        {
          "id": 21,
          "branch_name": "Homeopathy",
          "roles": [
            {
              "role_id": 56,
              "role": "Homeopathic Doctor"
            },
            {
              "role_id": 57,
              "role": "Homeopathic Practitioner"
            }
          ]
        },
        {
          "id": 22,
          "branch_name": "Surgery",
          "roles": [
            {
              "role_id": 58,
              "role": "Homeopathic Surgeon"
            },
            {
              "role_id": 59,
              "role": "Specialist Surgeon"
            }
          ]
        }
      ]
    }
  ]
  staticRoles: any[] = []

  constructor(private activatedRoute: ActivatedRoute,private roleService: RolesService,private roadmapService: RoadmapService,private router: Router,) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.selectedCourse = params['course'];
      this.selectedBranch = params['branch'];
      this.selectedRole = params['role']
      console.log("pp",this.selectedCourse, this.selectedBranch,this.staticRoles);
    });

    this.loadRoles();
    // this.getRoadmaps();


     // Call the method to filter staticRoles based on selected course and branch
     this.getRolesForSelectedCourseAndBranch();
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

  getRolesForSelectedCourseAndBranch(): void {
    const course = this.staticCourseData.find(course => course.id == this.selectedCourse);
    console.log("mm", course);

    if (course) {
        const branch = course.branches.find(branch => branch.id == this.selectedBranch);
        console.log("nn", branch, "Selected Branch ID:", this.selectedBranch);

        if (branch) {
            this.staticRoles = branch.roles; // Assign the roles to the roles array
            console.log("Filtered roles:", this.staticRoles);
        } else {
            this.staticRoles = []; // If no branch found, reset roles
            console.log("No branch found for selected ID:", this.selectedBranch);
        }
    } else {
        this.staticRoles = []; // If no course found, reset roles
        console.log("No course found for selected ID:", this.selectedCourse);
    }
}

}