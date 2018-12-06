import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideoService } from '../../video.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  term: string;
  searches: any;
  constructor(private videos: VideoService, private route:ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.term = params['term'];  
      this.getVideos();
    });
  }

  ngOnInit() {
  }

  getVideos(): void{
    console.log("Searching")
    this.videos.getSearch(this.term).subscribe(res => {
      this.searches = res;
      console.log(res)
    });
  }
}
