import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class VideoService {
  
  top5: Object = {
    most_viewed:[
      {
        title:"This is a title",
        thumb:"https://i.ytimg.com/vi/JIwkF80xBoI/maxresdefault.jpg",
        creator:"Billy",
        views:25432
      },
      {
        title:"Title 2",
        thumb:"https://i.ytimg.com/vi/JIwkF80xBoI/maxresdefault.jpg",
        creator:"Matt Schultz",
        views:52462
      },
      {
        title:"Title 2",
        thumb:"https://i.ytimg.com/vi/JIwkF80xBoI/maxresdefault.jpg",
        creator:"Matt Schultz",
        views:52462
      },
      {
        title:"Title 2",
        thumb:"https://i.ytimg.com/vi/JIwkF80xBoI/maxresdefault.jpg",
        creator:"Matt Schultz",
        views:52462
      },
      {
        title:"Title 2",
        thumb:"https://i.ytimg.com/vi/JIwkF80xBoI/maxresdefault.jpg",
        creator:"Matt Schultz",
        views:52462
      }
    ]
  };

  constructor(private http:HttpClient) { }
  
  getVideo(id): Observable<Object>{
    return this.http.get('http://yetube.dockedfiles.com/videos/' + id);
  }

  getTop5s(): Observable<Object> {
    return this.http.get('http://yetube.dockedfiles.com/videos');
  }
}
