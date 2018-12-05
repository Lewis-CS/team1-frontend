import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  getComments(videoId): Observable<any>{
    return this.http.get('http://yetube.dockedfiles.com:8080/comments/' + videoId);
  }

  postComment(comment, authId, videoId): Observable<any>{
    return this.http.post('http://yetube.dockedfiles.com:8080/comments', {comment:comment, authId:authId, videoId:videoId});
  }
}
