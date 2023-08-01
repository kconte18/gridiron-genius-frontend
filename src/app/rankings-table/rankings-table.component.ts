import { Component, OnInit } from '@angular/core';
import { RankingsService } from '../services/rankings.service';

@Component({
  selector: 'app-rankings-table',
  templateUrl: './rankings-table.component.html',
  styleUrls: ['./rankings-table.component.css']
})
export class RankingsTableComponent implements OnInit {
  scoreType: string = 'ppr';
  positionType: string = 'overall';

  rankings: any;

  constructor(private rankingsService: RankingsService) { }

  ngOnInit(): void {
    this.rankingsService.getRankings(this.scoreType, this.positionType).subscribe(response => {
      this.rankings = response;
      console.log(this.rankings);
    });
  }

}
