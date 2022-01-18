import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'aq-tooltip',
  templateUrl: './aq-tooltip.component.html',
  styleUrls: ['./aq-tooltip.component.scss']
})
export class AqTooltipComponent implements OnInit {
  @Input() text = ''; 
  @Input() hover = ''; 

  constructor() { }

  ngOnInit(): void {
  }

}
