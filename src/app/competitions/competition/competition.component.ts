import { HttpService } from '../../http.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.scss'],
})
export class CompetitionComponent implements OnInit {
  state;
  matches;

  constructor(private http: HttpService) {}

  ngOnInit() {
    if (history.state) {
      this.state = history.state;
    }

    this.http.getMatches(this.state.data.id).subscribe((data) => {
      this.matches = data['matches'].filter(
        (item) => item.status !== 'FINISHED'
      );

      console.log(this.matches);
    });
  }
}
