import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RankingsService {

  baseUrl: string = 'localhost:8000/rankings'

  constructor(private http: HttpClient) { }

  getRankings(scoreType: string, positionType: string): Observable<any> {
    return this.http.get(this.baseUrl + '/' + scoreType + '/' + positionType);
  }
}
