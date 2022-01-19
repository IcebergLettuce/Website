import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {

  mail = "manuel@hirzel.technology"
  toggle = false
  constructor() { }

  ngOnInit(): void {
  }

  onHover(){
    this.toggle = !this.toggle
  }
}