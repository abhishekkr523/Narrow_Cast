import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isModalOpen: boolean = false;
  selectedCourse: string = '';
  selectedBranch: string = '';

  constructor(private router: Router) { }

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
}
