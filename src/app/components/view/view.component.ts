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

  ngOnInit() {
    this.videoId = this.route.snapshot.params['id'];
    this.getRecommended();
  }

  getRecommended(): void{
    this.videos.getTop5s().subscribe(vids => this.recommended = vids);
  }
}
