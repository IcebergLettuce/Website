import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shake',
  templateUrl: './shake.component.html',
  styleUrls: ['./shake.component.scss']
})
export class ShakeComponent implements OnInit {
  @Input() text = ''; 

  constructor() { }

  ngOnInit(): void {
  }

}
