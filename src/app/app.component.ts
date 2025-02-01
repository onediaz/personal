import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app';
  userViewCount = 0;

  ngOnInit() {
    const userViewCount = localStorage.getItem('userViewCount');
    if (userViewCount) {
      this.userViewCount = parseInt(userViewCount);
    } else {
      this.userViewCount = 0;
    }

    window.addEventListener('load', (event) => {
      this.userViewCount++;
      localStorage.setItem('userViewCount', this.userViewCount.toString());
    });
    console.log('App Component Init');
  }
}
