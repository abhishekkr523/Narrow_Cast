import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoadmapService {

  private apiUrl = 'http://localhost:8000/api'; // Replace with your backend API URL

  constructor(private http: HttpClient) {}

  // Fetch roadmaps by course, branch, and role
  getRoadmapByCourseBranchRole(courseId: number, branchId: number, roleId: number): Observable<any> {
    const url = `${this.apiUrl}/roadmaps/course/${courseId}/branch/${branchId}/role/${roleId}`;
    return this.http.get(url);
  }
}
