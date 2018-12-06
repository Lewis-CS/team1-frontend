
import { Component, OnInit } from '@angular/core';
import { VideoService } from '../../video.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data: Object = {};

  constructor(private videos: VideoService) { }

  ngOnInit() {
    this.getTop5s();
  }

  getTop5s(): void{
    this.videos.getMostViewed().subscribe(vids => this.data['most_viewed'] = vids);
    this.videos.getTopRated().subscribe(vids => this.data['top_rated'] = vids);
    this.videos.getNewlyAdded().subscribe(vids => this.data['newly_added'] = vids);
  }
}

