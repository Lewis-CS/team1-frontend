import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../auth.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  
  videoFile:File;
  thumbFile:File;
  uploading: boolean = false;

  constructor(private auth: AuthService, private http: HttpClient) {
  }

  ngOnInit() {
  }

  onSubmit(f: NgForm): void{
    this.uploading = true;
    let user_id = this.auth.profile().sub;
    const formData = new FormData();
    formData.append('userId', user_id);
    formData.append('videoTitle', f.value.videoTitle)
    formData.append('videoDescription', f.value.videoDescription)
    this.http.post(environment.api + '/upload', formData).subscribe(res => {
      console.log(res)
      let in_id = res['inserted_id'];
      const formData2 = new FormData();
      formData2.append('userId', user_id);
      formData2.append('videoId', in_id);
      formData2.append('videoFile', this.videoFile, this.videoFile.name);
      this.http.post(environment.api + '/upload/video', formData2).subscribe(res => {
	console.log(res)
        const formData3 = new FormData();
        formData3.append('userId', user_id);
        formData3.append('videoId', in_id);
        formData3.append('thumbFile', this.thumbFile, this.thumbFile.name);
        this.http.post(environment.api + '/upload/thumb', formData3).subscribe(res => {
          console.log(res)
          console.log("Video upload complete!")
        }, _ => {}, () => this.uploading = false);
      }, _ => this.uploading = false);
    }, _ => this.uploading = false);    


    console.log(this.videoFile)
  }

  onVideo(files): void{
    if(files.length < 1) return;
    this.videoFile = files[0];
  }
  onThumb(files): void{
    if(files.length < 1) return;
    this.thumbFile = files[0];
  }
}
