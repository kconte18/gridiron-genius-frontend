import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Ranking } from '../models/Ranking';
import { environment } from 'src/environments/environment';

import qbRankings from '../../assets/rankings_json/qb.json'
import standardOverallRankings from '../../assets/rankings_json/standard-overall.json'
import standardRbRankings from '../../assets/rankings_json/standard-rb.json'
import standardWrRankings from '../../assets/rankings_json/standard-wr.json'
import standardTeRankings from '../../assets/rankings_json/standard-te.json'
import pprOverallRankings from '../../assets/rankings_json/ppr-overall.json'
import pprRbRankings from '../../assets/rankings_json/ppr-rb.json'
import pprWrRankings from '../../assets/rankings_json/ppr-wr.json'
import pprTeRankings from '../../assets/rankings_json/ppr-te.json'

@Injectable({
  providedIn: 'root'
})
export class RankingsService {

  baseUrl: string = environment.backendRankingsURL;

  constructor(private http: HttpClient) { }

  // getRankings(scoreType: string, positionType: string): Observable<Ranking[]> {
  //   return this.http.get<Ranking[]>(this.baseUrl + '/get/' + scoreType + '/' + positionType,{headers: {'Content-Type':'application/json'}});
  // }
  
  getRankings(scoreType: string, positionType: string): Ranking[] {
    if(positionType == 'qb') {
      return qbRankings
    }
    if(scoreType == 'standard') {
      switch(positionType) {
        case 'overall':
          return standardOverallRankings;
        case 'rb':
          return standardRbRankings;
        case 'wr':
          return standardWrRankings;
        case 'te':
          return standardTeRankings;
      }
    }
    else if(scoreType === 'ppr') {
      switch(positionType) {
        case 'overall':
          return pprOverallRankings;
        case 'rb':
          return pprRbRankings;
        case 'wr':
          return pprWrRankings;
        case 'te':
          return pprTeRankings;
      }
    }
    alert("Oops, there is an error on our side! Please come back later")
    return standardOverallRankings;
  }
}
