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

  staticCourseData = [
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
              "role": "Software Developer",
              "roadmap": {
                "id": 1,
                "roadmap_name": "Software Developer Roadmap",
                "steps": [
                  {"step_number": 1, "description": "Learn the Basics of Web Development (HTML, CSS, JS)"},
                  {"step_number": 2, "description": "Version Control and Collaboration (Git, GitHub/GitLab/Bitbucket)"},
                  {"step_number": 3, "description": "Master CSS Frameworks and Preprocessors (Bootstrap, Tailwind CSS, Bulma, Sass/SCSS)"},
                  {"step_number": 4, "description": "Learn JavaScript Frameworks/Libraries (React, Vue.js, Angular)"},
                  {"step_number": 5, "description": "Responsive Design and CSS Techniques (Media Query, Flexbox, Grid)"},
                  {"step_number": 6, "description": "Build Projects (Personal Portfolio, Clone websites, Open Source Contribution)"},
                  {"step_number": 7, "description": "Learn Package Manager (Node.js, NPM/Yarn, Webpack, Vite, Parcel, npm scripts to bundle and optimize code)"},
                  {"step_number": 8, "description": "Learn Testing (Testing frameworks like Jest or Mocha; tools like Cypress or Selenium for entire workflows)"},
                  {"step_number": 9, "description": "Learn API Integration (RESTful APIs, GraphQL)"},
                  {"step_number": 10, "description": "Learn State Management (Redux, Context API, Pinia/Vuex, RxJS)"},
                  {"step_number": 11, "description": "Browser Developer Tools (Chrome DevTools: console, network tab, element inspector, performance analyzer)"},
                  {"step_number": 12, "description": "Deployment and Hosting (Vercel, Netlify, GitHub Pages, AWS, CI/CD pipelines)"},
                  {"step_number": 13, "description": "Web Performance Optimization"}
                ]
              }
            },
            {
              "role_id": 2,
              "role": "Data Scientist",
              "roadmap": {
                "id": 2,
                "roadmap_name": "Data Scientist Roadmap",
                "steps": [
                  {"step_number": 1, "description": "Learn Python or R for Data Analysis"},
                  {"step_number": 2, "description": "Understand Statistics and Probability"},
                  {"step_number": 3, "description": "Learn Data Visualization Techniques"},
                  {"step_number": 4, "description": "Get Familiar with Data Manipulation Libraries (Pandas, NumPy)"},
                  {"step_number": 5, "description": "Learn SQL for Database Management"},
                  {"step_number": 6, "description": "Understand Machine Learning Algorithms"},
                  {"step_number": 7, "description": "Work on Real-World Projects"},
                  {"step_number": 8, "description": "Learn Big Data Technologies (Hadoop, Spark)"},
                  {"step_number": 9, "description": "Understand Cloud Services (AWS, GCP, Azure)"},
                  {"step_number": 10, "description": "Keep Updated with the Latest Trends"}
                ]
              }
            },
            {
              "role_id": 3,
              "role": "Network Engineer",
              "roadmap": {
                "id": 3,
                "roadmap_name": "Network Engineer Roadmap",
                "steps": [
                  {"step_number": 1, "description": "Learn Networking Basics (TCP/IP, OSI Model)"},
                  {"step_number": 2, "description": "Get Familiar with Networking Devices (Routers, Switches)"},
                  {"step_number": 3, "description": "Understand IP Addressing and Subnetting"},
                  {"step_number": 4, "description": "Learn about Firewalls and Network Security"},
                  {"step_number": 5, "description": "Get Hands-On with Network Configuration"},
                  {"step_number": 6, "description": "Learn about VPNs and Remote Access"},
                  {"step_number": 7, "description": "Understand Wireless Networking"},
                  {"step_number": 8, "description": "Work on Real Networking Projects"},
                  {"step_number": 9, "description": "Learn about Network Monitoring Tools"},
                  {"step_number": 10, "description": "Stay Updated with New Technologies"}
                ]
              }
            }
          ]
        },
        {
          "id": 2,
          "branch_name": "Mechanical Engineering",
          "roles": [
            {
              "role_id": 4,
              "role": "Mechanical Engineer",
              "roadmap": {
                "id": 4,
                "roadmap_name": "Mechanical Engineer Roadmap",
                "steps": [
                  {"step_number": 1, "description": "Learn the Basics of Mechanical Engineering Principles"},
                  {"step_number": 2, "description": "Master CAD Software (AutoCAD, SolidWorks)"},
                  {"step_number": 3, "description": "Understand Thermodynamics and Fluid Mechanics"},
                  {"step_number": 4, "description": "Get Familiar with Material Science"},
                  {"step_number": 5, "description": "Learn about Manufacturing Processes"},
                  {"step_number": 6, "description": "Work on Projects Involving Mechanical Design"},
                  {"step_number": 7, "description": "Understand Finite Element Analysis (FEA)"},
                  {"step_number": 8, "description": "Get Hands-On with Prototyping"},
                  {"step_number": 9, "description": "Learn Project Management Basics"},
                  {"step_number": 10, "description": "Stay Updated with Industry Trends"}
                ]
              }
            },
            {
              "role_id": 5,
              "role": "Automotive Engineer",
              "roadmap": {
                "id": 5,
                "roadmap_name": "Automotive Engineer Roadmap",
                "steps": [
                  {"step_number": 1, "description": "Understand Automotive Systems and Components"},
                  {"step_number": 2, "description": "Learn about Engine Design and Performance"},
                  {"step_number": 3, "description": "Get Familiar with Vehicle Dynamics"},
                  {"step_number": 4, "description": "Master CAD Software for Automotive Applications"},
                  {"step_number": 5, "description": "Learn about Manufacturing Processes for Automotive Parts"},
                  {"step_number": 6, "description": "Work on Vehicle Testing and Evaluation"},
                  {"step_number": 7, "description": "Understand Automotive Electronics and Control Systems"},
                  {"step_number": 8, "description": "Stay Updated with Industry Trends and Regulations"},
                  {"step_number": 9, "description": "Get Hands-On with Real Automotive Projects"},
                  {"step_number": 10, "description": "Learn about Electric and Hybrid Vehicles"}
                ]
              }
            },
            {
              "role_id": 6,
              "role": "Production Manager",
              "roadmap": {
                "id": 6,
                "roadmap_name": "Production Manager Roadmap",
                "steps": [
                  {"step_number": 1, "description": "Understand Production Processes and Techniques"},
                  {"step_number": 2, "description": "Learn about Supply Chain Management"},
                  {"step_number": 3, "description": "Get Familiar with Lean Manufacturing Principles"},
                  {"step_number": 4, "description": "Master Production Planning Tools"},
                  {"step_number": 5, "description": "Work on Quality Control Techniques"},
                  {"step_number": 6, "description": "Learn about Equipment Maintenance Management"},
                  {"step_number": 7, "description": "Develop Leadership and Team Management Skills"},
                  {"step_number": 8, "description": "Stay Updated with Industry Standards"},
                  {"step_number": 9, "description": "Get Hands-On with Production Projects"},
                  {"step_number": 10, "description": "Understand Cost Management in Production"}
                ]
              }
            }
          ]
        },
        {
          "id": 3,
          "branch_name": "Civil Engineering",
          "roles": [
            {
              "role_id": 7,
              "role": "Civil Engineer",
              "roadmap": {
                "id": 7,
                "roadmap_name": "Civil Engineer Roadmap",
                "steps": [
                  {"step_number": 1, "description": "Learn Civil Engineering Basics and Principles"},
                  {"step_number": 2, "description": "Master CAD Software for Civil Engineering"},
                  {"step_number": 3, "description": "Understand Structural Analysis and Design"},
                  {"step_number": 4, "description": "Get Familiar with Geotechnical Engineering"},
                  {"step_number": 5, "description": "Learn about Construction Management"},
                  {"step_number": 6, "description": "Work on Real Civil Engineering Projects"},
                  {"step_number": 7, "description": "Understand Environmental Engineering Principles"},
                  {"step_number": 8, "description": "Stay Updated with Regulations and Standards"},
                  {"step_number": 9, "description": "Develop Project Management Skills"},
                  {"step_number": 10, "description": "Understand Urban Planning Principles"}
                ]
              }
            },
            {
              "role_id": 8,
              "role": "Construction Manager",
              "roadmap": {
                "id": 8,
                "roadmap_name": "Construction Manager Roadmap",
                "steps": [
                  {"step_number": 1, "description": "Learn Construction Management Fundamentals"},
                  {"step_number": 2, "description": "Get Familiar with Construction Project Life Cycle"},
                  {"step_number": 3, "description": "Master Cost Estimation and Budgeting"},
                  {"step_number": 4, "description": "Understand Contract Management and Legal Aspects"},
                  {"step_number": 5, "description": "Work on Resource Management Skills"},
                  {"step_number": 6, "description": "Learn about Health and Safety Regulations"},
                  {"step_number": 7, "description": "Stay Updated with Industry Best Practices"},
                  {"step_number": 8, "description": "Develop Leadership and Communication Skills"},
                  {"step_number": 9, "description": "Get Hands-On with Construction Projects"},
                  {"step_number": 10, "description": "Understand Sustainability in Construction"}
                ]
              }
            },
            {
              "role_id": 9,
              "role": "Urban Planner",
              "roadmap": {
                "id": 9,
                "roadmap_name": "Urban Planner Roadmap",
                "steps": [
                  {"step_number": 1, "description": "Understand Urban Planning Concepts and Principles"},
                  {"step_number": 2, "description": "Get Familiar with Land Use Planning"},
                  {"step_number": 3, "description": "Learn about Transportation Planning"},
                  {"step_number": 4, "description": "Master Geographic Information Systems (GIS)"},
                  {"step_number": 5, "description": "Understand Environmental Planning and Sustainability"},
                  {"step_number": 6, "description": "Work on Real Urban Planning Projects"},
                  {"step_number": 7, "description": "Stay Updated with Urban Policies and Regulations"},
                  {"step_number": 8, "description": "Develop Community Engagement Skills"},
                  {"step_number": 9, "description": "Learn about Urban Design Principles"},
                  {"step_number": 10, "description": "Understand Economic Development in Urban Planning"}
                ]
              }
            }
          ]
        },
        {
          "id": 4,
          "branch_name": "Electrical Engineering",
          "roles": [
            {
              "role_id": 10,
              "role": "Electrical Engineer",
              "roadmap": {
                "id": 10,
                "roadmap_name": "Electrical Engineer Roadmap",
                "steps": [
                  {"step_number": 1, "description": "Learn Basics of Electrical Engineering Principles"},
                  {"step_number": 2, "description": "Master Circuit Analysis Techniques"},
                  {"step_number": 3, "description": "Get Familiar with Control Systems"},
                  {"step_number": 4, "description": "Understand Electronics and Signal Processing"},
                  {"step_number": 5, "description": "Learn about Power Systems and Machines"},
                  {"step_number": 6, "description": "Work on Real Electrical Engineering Projects"},
                  {"step_number": 7, "description": "Stay Updated with New Technologies in Electrical Engineering"},
                  {"step_number": 8, "description": "Develop Project Management Skills"},
                  {"step_number": 9, "description": "Understand Electrical Safety Regulations"},
                  {"step_number": 10, "description": "Learn about Renewable Energy Systems"}
                ]
              }
            },
            {
              "role_id": 11,
              "role": "Control Systems Engineer",
              "roadmap": {
                "id": 11,
                "roadmap_name": "Control Systems Engineer Roadmap",
                "steps": [
                  {"step_number": 1, "description": "Understand Control Systems Basics"},
                  {"step_number": 2, "description": "Master MATLAB for Control Systems"},
                  {"step_number": 3, "description": "Learn about PID Controllers and Tuning"},
                  {"step_number": 4, "description": "Get Familiar with System Dynamics"},
                  {"step_number": 5, "description": "Work on Control System Design Projects"},
                  {"step_number": 6, "description": "Understand State-Space Representation"},
                  {"step_number": 7, "description": "Stay Updated with Control Systems Technologies"},
                  {"step_number": 8, "description": "Develop Problem-Solving Skills"},
                  {"step_number": 9, "description": "Learn about Robotics and Automation"},
                  {"step_number": 10, "description": "Understand Industrial Control Systems"}
                ]
              }
            },
            {
              "role_id": 12,
              "role": "Power Systems Engineer",
              "roadmap": {
                "id": 12,
                "roadmap_name": "Power Systems Engineer Roadmap",
                "steps": [
                  {"step_number": 1, "description": "Learn about Power System Basics"},
                  {"step_number": 2, "description": "Understand Power Generation Techniques"},
                  {"step_number": 3, "description": "Master Power System Analysis Tools"},
                  {"step_number": 4, "description": "Learn about Power System Protection"},
                  {"step_number": 5, "description": "Work on Power System Projects"},
                  {"step_number": 6, "description": "Stay Updated with Power Systems Technologies"},
                  {"step_number": 7, "description": "Develop Analytical Skills"},
                  {"step_number": 8, "description": "Understand Renewable Energy Integration"},
                  {"step_number": 9, "description": "Learn about Smart Grid Technologies"},
                  {"step_number": 10, "description": "Understand Energy Market Regulations"}
                ]
              }
            }
          ]
        },
        {
          "id": 5,
          "branch_name": "Information Technology",
          "roles": [
            {
              "role_id": 13,
              "role": "Systems Analyst",
              "roadmap": {
                "id": 13,
                "roadmap_name": "Systems Analyst Roadmap",
                "steps": [
                  {"step_number": 1, "description": "Understand System Analysis Fundamentals"},
                  {"step_number": 2, "description": "Learn Requirements Gathering Techniques"},
                  {"step_number": 3, "description": "Get Familiar with UML Diagrams"},
                  {"step_number": 4, "description": "Master Software Development Life Cycle (SDLC)"},
                  {"step_number": 5, "description": "Work on Real Systems Analysis Projects"},
                  {"step_number": 6, "description": "Stay Updated with IT Trends"},
                  {"step_number": 7, "description": "Understand Project Management Principles"},
                  {"step_number": 8, "description": "Develop Communication Skills"},
                  {"step_number": 9, "description": "Learn about Database Management Systems"},
                  {"step_number": 10, "description": "Understand Business Process Modeling"}
                ]
              }
            },
            {
              "role_id": 14,
              "role": "IT Project Manager",
              "roadmap": {
                "id": 14,
                "roadmap_name": "IT Project Manager Roadmap",
                "steps": [
                  {"step_number": 1, "description": "Learn Project Management Basics"},
                  {"step_number": 2, "description": "Understand Agile and Scrum Methodologies"},
                  {"step_number": 3, "description": "Get Familiar with Project Planning Techniques"},
                  {"step_number": 4, "description": "Master Resource Management"},
                  {"step_number": 5, "description": "Work on Real IT Project Management Projects"},
                  {"step_number": 6, "description": "Stay Updated with Project Management Tools"},
                  {"step_number": 7, "description": "Develop Leadership Skills"},
                  {"step_number": 8, "description": "Understand Risk Management Principles"},
                  {"step_number": 9, "description": "Learn about Stakeholder Management"},
                  {"step_number": 10, "description": "Understand Quality Assurance Principles"}
                ]
              }
            },
            {
              "role_id": 15,
              "role": "Database Administrator",
              "roadmap": {
                "id": 15,
                "roadmap_name": "Database Administrator Roadmap",
                "steps": [
                  {"step_number": 1, "description": "Understand Database Concepts and Architecture"},
                  {"step_number": 2, "description": "Learn SQL and Database Querying"},
                  {"step_number": 3, "description": "Get Familiar with Database Design Principles"},
                  {"step_number": 4, "description": "Master Database Management Systems (MySQL, Oracle)"},
                  {"step_number": 5, "description": "Work on Database Security Best Practices"},
                  {"step_number": 6, "description": "Stay Updated with Database Technologies"},
                  {"step_number": 7, "description": "Develop Backup and Recovery Strategies"},
                  {"step_number": 8, "description": "Understand Performance Tuning Techniques"},
                  {"step_number": 9, "description": "Learn about NoSQL Databases"},
                  {"step_number": 10, "description": "Understand Data Warehousing Concepts"}
                ]
              }
            }
          ]
        }
      ]
    }
  ]
staticRoadmaps: any[]=[]  

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
    console.log("yy",this.selectedRole)
  }

  // getRoadmaps(): void {
  //   this.roadmapService.getRoadmapByCourseBranchRole(
  //     this.selectedCourse,
  //     this.selectedBranch,
  //     this.selectedRole
  //   ).subscribe(
  //     (data) => {
  //       this.roadmaps = Array.isArray(data) ? data : [data];
  //       this.roadmaps = this.roadmaps.map((roadmap) => ({
  //         ...roadmap,
  //         steps: roadmap.steps ? JSON.parse(roadmap.steps) : [],
  //       }));
  //       console.log('Roadmaps:', this.roadmaps);
  //     },
  //     (error) => {
  //       console.error('Error fetching roadmaps:', error);
  //     }
  //   );
  // }

//for static start
  getRoadmaps(): void {
    // Find the roadmap for the selected role from staticCourseData
    const roadmap = this.findRoadmapByRoleId(this.selectedRole);
    console.log("aaaa",roadmap)
    if (roadmap) {
      this.staticRoadmaps.push(roadmap);
      console.log('Roadmaps:', this.staticRoadmaps[0]);
    } else {
      console.error('Roadmap not found for role ID:', this.selectedRole);
    }
  }

  findRoadmapByRoleId(roleId: number): any {
    for (const course of this.staticCourseData) {
      for (const branch of course.branches) {
        for (const role of branch.roles) {
          if (role.role_id == roleId) {
            console.log("wwq",role.role_id)
            return role.roadmap; // Return the roadmap corresponding to the role_id
          }
        }
      }
    }
    return null; // Return null if no roadmap is found
  }

  navigateForSummerize(){
    this.router.navigate(['/summerizer'])
  }
//end

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
