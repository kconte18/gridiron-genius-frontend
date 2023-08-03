import { Component, OnInit } from '@angular/core';
import { RankingsService } from '../../services/rankings.service';
import { Ranking } from '../../models/Ranking';


@Component({
  selector: 'app-rankings-table',
  templateUrl: './rankings-table.component.html',
  styleUrls: ['./rankings-table.component.css']
})
export class RankingsTableComponent implements OnInit {
  scoreType: string = 'ppr';
  positionType: string = 'overall';

  allRankings: Ranking[] = [];

  fantasyProsRankings: Ranking[] = [];
  fftodayRankings: Ranking[] = [];
  footballGuysRankings: Ranking[] = [];
  theScoreRankings: Ranking[] = [];

  chunk: Ranking[] = [];

  constructor(private rankingsService: RankingsService) { }

  ngOnInit(): void {
    this.rankingsService.getRankings(this.scoreType, this.positionType).subscribe(response => {
      this.allRankings = response;
      this.allRankings.sort(function (a, b) {
        return a.rank - b.rank || a.ranking_src.ranking_src_name.charCodeAt(0) - b.ranking_src.ranking_src_name.charCodeAt(0) || a.ranking_src.ranking_src_name.charCodeAt(1) - b.ranking_src.ranking_src_name.charCodeAt(1)
      });
    });
  }

  chunkArray(array: any[], chunkSize: number): any[] {
    const chunks: any[] = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  }

}
