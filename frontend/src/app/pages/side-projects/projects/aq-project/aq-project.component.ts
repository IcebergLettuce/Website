import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aq-project',
  templateUrl: './aq-project.component.html',
  styleUrls: ['./aq-project.component.scss'],
  animations: [
    trigger(
      'inOutAnimation', 
      [
        transition(
          ':enter', 
          [
            style({ height: 0, opacity: 0 }),
            animate('1s ease-out', 
                    style({ height: 300, opacity: 1 }))
          ]
        ),
        transition(
          ':leave', 
          [
            style({ height: 0, opacity: 1 }),
            animate('0s ease-in', 
                    style({ height: 0, opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class AqProjectComponent implements OnInit {

  public selection = "examples"

  constructor() { }

 public clickview(selection:string){
  this.selection = selection
 }

  ngOnInit(): void {
  }

}
