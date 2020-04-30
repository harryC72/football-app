import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  competitions;

  constructor(private http: HttpService) {}

  ngOnInit() {
    this.http.getCompetitions().subscribe((data) => {
      this.competitions = data['competitions'].filter(
        (item) => item.plan === 'TIER_ONE'
      );

      // this.competitions = data;
      console.log(this.competitions);
    });
  }
}
