import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private baseUrl = 'http://localhost:8000/api';

  constructor( private http :HttpClient) { }

  // Fetch all courses
  getCourses(): Observable<any> {
    return this.http.get(`${this.baseUrl}/courses`);
  }

  // Fetch all branches
  getBranches(course_id:any): Observable<any> {
    console.log("kkkkk",course_id);
    return this.http.get(`${this.baseUrl}/branches/course/${course_id}`);
  }

  // Fetch a specific course by ID
  getCourseById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/courses/${id}`);
  }

  // Fetch a specific branch by ID
  getBranchById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/branches/${id}`);
  }
}
