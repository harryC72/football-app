import { HttpService } from '../../http.service';
import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../notification.service';
import { UIStateService } from '../../ui-state-service.service';

@Component({
  selector: 'app-competition',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss'],
})
export class MatchesComponent implements OnInit {
  state;
  Matches: object;
  public errorMessage = '';

  constructor(
    private http: HttpService,
    private notifyService: NotificationService,
    private uiStateService: UIStateService
  ) {}

  ngOnInit() {
    this.state = this.uiStateService.getState();
    if (!this.state) {
      this.uiStateService.setState({
        id: history.state.data.id,
        name: history.state.data.name,
      });
      this.state = this.uiStateService.getState();
    }

    this.getMatches();
  }

  setState(state) {
    return state;
  }

  setCurrentState() {
    return {
      id: history.state.data.id,
      name: history.state.data.name,
    };
  }

  getMatches() {
    const reqState = this.uiStateService.getState();
    this.http.getMatches(reqState.id).subscribe({
      next: (data) => {
        const filteredData = data['matches'].filter(
          (item) => item.status !== 'FINISHED'
        );

        this.Matches = filteredData.map((item) => {
          return {
            id: item.id,
            homeTeam: item.homeTeam.name,
            awayTeam: item.awayTeam.name,
            status: item.status,
            startDate: item.season.startDate,
            endDate: item.season.endDate,
            currentMatchday: item.season.currentMatchday,
          };
        });
      },
      error: (error) => {
        this.notifyService.showError(error.message, error.status);
      },
    });
  }
}
