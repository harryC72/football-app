import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
})
export class EventComponent implements OnInit {
  state;
  match;
  constructor(private http: HttpService) {}

  ngOnInit(): void {
    this.state = history.state;
    console.log('STATE EVENT', this.state);

    this.http.getMatch(this.state.data.id).subscribe((data) => {
      this.match = data;
      console.log(this.match);
    });
  }
}
