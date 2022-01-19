import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideInAnimation
  ]
})
export class AppComponent implements OnInit {
  title = 'Hirzel Technology';
  mobile = false;
  outlet:any
  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'];
  }
 
  ngOnInit() {
    if (window.screen.width < 400) { // 768px portrait
      this.mobile = true;
    };
    console.log(this.mobile)
  }
}
