import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type': 'application/json',
//     'X-Auth-Token': '6205d859b6ac49218baf2da7c9eda323',
//   }),
// };

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

  getMatches(term: string) {
    return this.http.get(
      `http://api.football-data.org/v2/competitions/${term}/matches`,
      {
        headers: { 'X-Auth-Token': '6205d859b6ac49218baf2da7c9eda323' },
      }
    );
  }

  getMatch(id) {
    return this.http.get(`http://api.football-data.org//v2/matches/${id}`, {
      headers: { 'X-Auth-Token': '6205d859b6ac49218baf2da7c9eda323' },
    });
  }
}
