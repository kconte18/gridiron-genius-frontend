import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Ranking } from '../models/Ranking';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RankingsService {

  baseUrl: string = environment.backendRankingsURL;

  constructor(private http: HttpClient) { }

  getRankings(scoreType: string, positionType: string): Observable<Ranking[]> {
    return this.http.get<Ranking[]>(this.baseUrl + '/get/' + scoreType + '/' + positionType,{headers: {'Content-Type':'application/json'}});
  }
}
