
import { Component, OnInit } from '@angular/core';
import { VideoService } from '../../video.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data: Object;

  constructor(private videos: VideoService) { }

  ngOnInit() {
    this.getTop5s();
  }

  getTop5s(): void{
    this.videos.getTop5s().subscribe(vids => this.data = vids);
  }
}

