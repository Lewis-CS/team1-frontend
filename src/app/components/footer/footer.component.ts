import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  template: `
    <footer class="footer">
    <div class="container">
    <div class="content has-text-centered">
      <p>
        Made with <3 by YouTube tryhards
      </p>
    </div>
    </div>
    </footer>
	`,
  styleUrls: ['./footer.component.css'],
  styles: []
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
