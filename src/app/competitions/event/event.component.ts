import { HttpService } from '../../http.service';
import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../notification.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
})
export class EventComponent implements OnInit {
  state;
  match;
  constructor(
    private http: HttpService,
    private notifyService: NotificationService
  ) {}

  ngOnInit(): void {
    this.state = history.state;
    console.log('STATE EVENT', this.state);

    this.http.getMatch(this.state.data.matchId).subscribe({
      next: (data) => (this.match = data),
      error: (error) => {
        this.notifyService.showError(error.message, error.status);
      },
    });
  }
}
