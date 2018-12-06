import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  getComments(videoId): Observable<any>{
    return this.http.get(environment.api + '/comments/' + videoId);
  }

  postComment(comment, authId, videoId): Observable<any>{
    return this.http.post(environment.api + '/comments', {comment:comment, authId:authId, videoId:videoId});
  }
}
