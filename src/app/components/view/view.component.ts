import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideoService } from '../../video.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  
  constructor(private route:ActivatedRoute, private videos:VideoService) { }

  videoId: string;
  recommended: Object;
  
  video: Object;

  ngOnInit() {
    this.videoId = this.route.snapshot.params['id'];
    this.getRecommended();
    this.getVideo();
  }

  getVideo(): void{
    this.videos.getVideo(this.videoId).subscribe(res => {
      this.video = res;
    });
  }
  getRecommended(): void{
    this.videos.getTop5s().subscribe(vid => this.recommended = vid);    
  }
}
