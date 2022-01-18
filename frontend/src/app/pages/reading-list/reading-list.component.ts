import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-reading-list',
  templateUrl: './reading-list.component.html',
  styleUrls: ['./reading-list.component.scss']
})
export class ReadingListComponent {

  public reading:any;
  Object = Object;

  private _jsonURL = 'assets/reading.json';
  constructor(private http: HttpClient) {
    this.getJSON().subscribe(x => {this.reading = x;    console.log(this.reading)
    });
  }
  private getJSON(): Observable<any> {
    return this.http.get(this._jsonURL);
  }
}
