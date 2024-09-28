import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  private baseUrl = 'http://localhost:8000/api'; // Update with your base URL

  constructor(private http: HttpClient) {}

  // Method to fetch roles by course and branch
  getRoles(courseId: number, branchId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/roles/course/${courseId}/branch/${branchId}`);
  }
}
