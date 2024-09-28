import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Constant } from './constant';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  constructor(private http: HttpClient) {}

  getVideoSummary(videoUrl: string): Observable<any> {
    const payload = {
      url: videoUrl,
    };

    // Make a POST request to the summarize API
    return this.http.post(
      `${Constant.API_END_POINT}${Constant.METHODS.GET_Summary_by_link}`,
      payload
    );
  }

  getTodo(ss: string | number) {
    return this.http.get(Constant.API_END_POINT + Constant.METHODS.Todo + ss);
  }
}
