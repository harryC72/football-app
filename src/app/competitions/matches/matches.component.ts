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
  state;
  Matches: object;
  public errorMessage = '';

  constructor(
    private http: HttpService,
    private notifyService: NotificationService,
    private uiStateService: UIStateService
  ) {}

  ngOnInit() {
    // if (history.state) {
    //   this.state = history.state;
    // }
    this.uiStateService.setState({
      id: history.state.data.id,
      name: history.state.data.name,
    });
    this.state = this.uiStateService.getState();
    console.log('STATE IN CONTROLLER', this.state);

    this.http.getMatches(this.state.id).subscribe({
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
}

// getUser(): Observable<User[]> {
//   return this.http.get('/api/user')
//     .map((res: Response) => res.json().response.map((user: User) => new User().deserialize(user)));
// }
