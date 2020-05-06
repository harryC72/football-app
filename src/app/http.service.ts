import { MatchModel } from './../interfaces/match';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  baseUrl = 'https://api.football-data.org';
  constructor(private http: HttpClient) {}

  getCompetitions() {
    return this.http.get(this.baseUrl + '/v2/competitions', {
      headers: { 'X-Auth-Token': '6205d859b6ac49218baf2da7c9eda323' },
    });
  }

  getMatches(term: string) {
    return this.http.get(this.baseUrl + `/v2/competitions/${term}/matches`, {
      headers: { 'X-Auth-Token': '6205d859b6ac49218baf2da7c9eda323' },
    });
  }

  getMatch(id): Observable<MatchModel> {
    return this.http.get<MatchModel>(this.baseUrl + `/v2/matches/${id}`, {
      headers: { 'X-Auth-Token': '6205d859b6ac49218baf2da7c9eda323' },
    });
  }
}
