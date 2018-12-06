import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideoService } from '../../video.service';
import { AuthService } from '../../auth.service';
import { CommentService } from '../../comment.service';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  
  constructor(private route:ActivatedRoute, private videos:VideoService, public auth:AuthService, private comments: CommentService) { }

  videoId: string;
  recommended: Object;
  
  video: Object;
  commentss: Object[];

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.videoId = params['id'];
      this.getRecommended();
      this.getVideo();
    });
    this.videoId = this.route.snapshot.params['id'];
    this.getRecommended();
    this.getVideo();
    console.log(this.auth.profile())
  }

  getVideo(): void{
    this.videos.getVideo(this.videoId).subscribe(res => {
      this.video = res;
      this.getComments();
    });
  }

  rateVideo(liked): void{
    if(this.auth.profile() === null) return;
    this.videos.postRate(this.video['video_id'], this.auth.profile().sub, liked).subscribe(res => {
      this.video['likes'] = res['likes'];
      this.video['total'] = res['total'];
    });
  }

  getRecommended(): void{
    this.videos.getTop5s().subscribe(vid => this.recommended = vid);    
  }
  
  getComments(): void{
    this.comments.getComments(this.video['video_id']).subscribe(res => {
      this.commentss = res;
    });
  }
  onComment(form): void{
    this.comments.postComment(form.value.comment, this.auth.profile().sub, this.video['video_id']).subscribe(res => {
      form.reset();
      this.commentss = res;
    });
  }
}
