import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  
  constructor(private http:HttpClient) { }
  
  getVideo(id): Observable<Object>{
    return this.http.get(environment.api + '/videos/' + id);
  }

  getTop5s(): Observable<Object> {
    return this.http.get(environment.api + '/videos');
  }

  postRate(videoId, authId, liked): Observable<Object> {
    return this.http.post(environment.api + '/ratings', {videoId:videoId, authId:authId, liked:liked})
  }
}
