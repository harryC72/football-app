import { HttpService } from '../../http.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from '../../notification.service';
import { UIStateService } from '../../ui-state-service.service';

@Component({
  selector: 'app-competition',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss'],
})
export class MatchesComponent implements OnInit {
  // state;
  idState: string;
  nameState: string;
  name: string;
  Matches: object;
  public errorMessage = '';

  constructor(
    private http: HttpService,
    private notifyService: NotificationService,
    private uiStateService: UIStateService
  ) {}

  ngOnInit() {
    //   this.state = history.state;
    const state = this.uiStateService.getState();
    this.setIdState(state.id);
    this.setNameState(state.name);

    this.setCurrentIdState(history.state.data.id);
    this.setCurrentNameState(history.state.data.name);

    this.http.getMatches(this.idState).subscribe({
      next: (data) => {
        const filteredData = data['matches'].filter(
          (item) => item.status !== 'FINISHED'
        );

        this.Matches = filteredData.map((item) => {
          return {
            id: item.id,
            homeTeam: item.homeTeam.name,
            awayTeam: item.awayTeam.name,
          };
        });
      },
      error: (error) => {
        this.notifyService.showError(error.message, error.status);
      },
    });
  }

  setIdState(id) {
    return id;
  }

  setCurrentIdState(id) {
    return id;
  }

  getCurrentIdState() {
    return this.idState;
  }

  setNameState(name) {
    return name;
  }

  setCurrentNameState(name) {
    return name;
  }

  getCurrentNameState() {
    return this.nameState;
  }

  ngOnDestroy() {
    this.uiStateService.setState({
      id: this.getCurrentIdState(),
      name: this.getCurrentNameState(),
    });
  }
}
