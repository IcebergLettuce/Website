import { Component, OnInit } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  toggle = false;
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faBars,
    );
  }
  ngOnInit(): void {
  }

  public toggleMenu(){
    this.toggle = !this.toggle
  }

}
