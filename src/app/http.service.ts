import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getCompetitions() {
    return this.http.get('http://api.football-data.org/v2/competitions', {
      headers: { 'X-Auth-Token': '6205d859b6ac49218baf2da7c9eda323' },
    });
  }
}
