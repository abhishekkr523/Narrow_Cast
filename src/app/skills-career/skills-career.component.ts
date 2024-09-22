import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-skills-career',
  templateUrl: './skills-career.component.html',
  styleUrls: ['./skills-career.component.css']
})
export class SkillsCareerComponent implements OnInit {
  selectedCourse: string = '';
  selectedBranch: string = '';

  skills: string[] = [
    'JavaScript', 'Python', 'Java', 'C++', 'Ruby', 'SQL', 'Git', 'Agile Methodologies',
    'Machine Learning', 'Data Analysis', 'Cloud Computing', 'Cybersecurity',
    'UI/UX Design', 'Project Management', 'Communication', 'Problem Solving',
    'Critical Thinking', 'Teamwork', 'Leadership', 'Time Management',
    'Blockchain', 'IoT', 'AR/VR', 'Natural Language Processing'
  ];

  careers: string[] = [
    'Software Developer', 'Data Scientist', 'AI Engineer', 'Cloud Architect',
    'Cybersecurity Analyst', 'DevOps Engineer', 'Full Stack Developer',
    'Mobile App Developer', 'Game Developer', 'UI/UX Designer',
    'Product Manager', 'Business Analyst', 'Database Administrator',
    'Network Engineer', 'Systems Analyst', 'IT Consultant',
    'Quality Assurance Engineer', 'Technical Writer', 'Machine Learning Engineer',
    'Blockchain Developer', 'IoT Specialist', 'AR/VR Developer'
  ];

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.selectedCourse = params['course'];
      this.selectedBranch = params['branch'];
      console.log(this.selectedCourse, this.selectedBranch);
    });
  }
}