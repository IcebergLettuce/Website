import { Component, OnInit } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faArrowAltCircleLeft, faArrowAltCircleRight, faGrin } from '@fortawesome/free-regular-svg-icons';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'home-button',
  templateUrl: './home-button.component.html',
  styleUrls: ['./home-button.component.scss']
})
export class HomeButtonComponent implements OnInit {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faArrowAltCircleLeft,
    );
  }

  ngOnInit(): void {
  }

}
