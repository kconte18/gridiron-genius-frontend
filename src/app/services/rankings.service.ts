import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Ranking } from '../models/Ranking';

@Injectable({
  providedIn: 'root'
})
export class RankingsService {

  baseUrl: string = 'http://localhost:8000/rankings'

  constructor(private http: HttpClient) { }

  getRankings(scoreType: string, positionType: string): Observable<Ranking[]> {
    return this.http.get<Ranking[]>(this.baseUrl + '/' + scoreType + '/' + positionType,{headers: {'Content-Type':'application/json'}});
  }
}
