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

  getSearch(term: string): Observable<Object>{
    console.log(term)
    return this.http.get(environment.api + '/videos/search?term=' + term);
  }
 
  getNewlyAdded(): Observable<Object>{
    return this.http.get(environment.api + '/videos/filter/new');
  }
  getTopRated(): Observable<Object>{
    return this.http.get(environment.api + '/videos/filter/ratings');
  }
  getMostViewed(): Observable<Object>{
    return this.http.get(environment.api + '/videos/filter/views');
  }

  postRate(videoId, authId, liked): Observable<Object> {
    return this.http.post(environment.api + '/ratings', {videoId:videoId, authId:authId, liked:liked})
  }
}
