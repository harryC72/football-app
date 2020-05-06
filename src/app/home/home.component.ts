import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../notification.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  Competitions;
  locationSubscription;

  constructor(
    private http: HttpService,
    private notifyService: NotificationService,
    private location: Location
  ) {}

  ngOnInit() {
    this.http.getCompetitions().subscribe({
      next: (data) => {
        const filteredData = data['competitions'].filter(
          (item) => item.plan === 'TIER_ONE'
        );

        this.Competitions = filteredData.map((comp) => {
          return {
            id: comp.id,
            name: comp.name,
            country: comp.area.name,
          };
        });
      },

      error: (error) => {
        this.notifyService.showError(error.message, error.status);
      },
    });
  }
}
