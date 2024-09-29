import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { YoutubeService } from '../services/youtube.service';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  courses: any[] = [];
  branches: any[] = [];

  isModalOpen: boolean = false;
  selectedCourse: string = '';
  selectedBranch: string = '';
  youtubeData: string= '' ;

  constructor(private router: Router, private youtubeService: YoutubeService,private courseService : CourseService) { }

  ngOnInit(): void {

    this.loadCourses();

  }


  openModal(): void {
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.resetForm();
  }

  onSubmit(): void {
    // if (this.selectedCourse && this.selectedBranch) {
    console.log(this.selectedCourse, this.selectedBranch);
      this.router.navigate(['skills-career'], {queryParams:{course:this.selectedCourse, branch:this.selectedBranch}});
    // }
    this.closeModal();
  }

  resetForm(): void {
    this.selectedCourse = '';
    this.selectedBranch = '';
  }


  // Load courses from the API
  loadCourses(): void {
    this.courseService.getCourses().subscribe(
      (data) => {
        this.courses = data;
        console.log('Courses:', this.courses);
      },
      (error) => {
        console.error('Error fetching courses:', error);
      }
    );
  }

  // Load branches from the API
  loadBranches(): void {
    this.courseService.getBranches(this.selectedCourse).subscribe(
      (data) => {
        this.branches = data;
        console.log('Branches:', this.branches);
      },
      (error) => {
        console.error('Error fetching branches:', error);
      }
    );
  }

   // Handle course change and load branches for the selected course
   onCourseChange(): void {
    this.branches = [];
    if (this.selectedCourse) {
      this.loadBranches(); // Call this function when a course is selected
    } else {
      this.branches = []; // Clear branches if no course is selected
    }
  }
}
