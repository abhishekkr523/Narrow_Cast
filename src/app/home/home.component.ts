import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isModalOpen: boolean = false;
  selectedCourse: string = '';
  selectedBranch: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  openModal(): void {
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.resetForm();
  }

  onSubmit(): void {
    console.log('Form submitted');
    console.log('Selected Course:', this.selectedCourse);
    console.log('Selected Branch:', this.selectedBranch);
    this.closeModal();
  }

  resetForm(): void {
    this.selectedCourse = '';
    this.selectedBranch = '';
  }
}
