import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class VideoService {
  
  constructor(private http:HttpClient) { }
  
  getVideo(id): Observable<Object>{
    return this.http.get('http://yetube.dockedfiles.com:8080/videos/' + id);
  }

  getTop5s(): Observable<Object> {
    return this.http.get('http://yetube.dockedfiles.com:8080/videos');
  }

  postRate(videoId, authId, liked): Observable<Object> {
    return this.http.post('http://yetube.dockedfiles.com:8080/ratings', {videoId:videoId, authId:authId, liked:liked})
  }
}
