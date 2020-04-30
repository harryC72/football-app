import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.scss'],
})
export class CompetitionComponent implements OnInit {
  state;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.state = history.state;
    console.log('STATE', this.state);
  }
}
