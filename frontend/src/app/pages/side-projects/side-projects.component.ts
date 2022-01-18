import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-projects',
  templateUrl: './side-projects.component.html',
  styleUrls: ['./side-projects.component.scss']
})
export class SideProjectsComponent implements OnInit {

  public infraIsCollapsed = true
  public coronaIsCollapsed = true;
  public pmIsCollapsed = false;
  public aqIsCollapsed = true;

  constructor() { }

  ngOnInit(): void {
  }

}
