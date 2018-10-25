import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  template: `
    <nav class="navbar is-dark">

      <!-- logo -->
      <div class="navbar-brand">
        <a class="navbar-item">
          <img src = "assets/images/YeTube_Logo.png">
        </a>
      </div>
    </nav>
  `,
  styleUrls: ['./header.component.css'],
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
