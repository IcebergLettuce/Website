import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(private router:Router){}

  goToLink(){
    console.log('shit')
    window.open('/assets/cv.pdf', '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes');

  }

  ngOnInit(): void {

  }

}
