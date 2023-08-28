import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RankingsService } from '../../services/rankings.service';
import { Ranking } from '../../models/Ranking';

@Component({
  selector: 'app-rankings-table',
  templateUrl: './rankings-table.component.html',
  styleUrls: ['./rankings-table.component.css']
})
export class RankingsTableComponent implements OnChanges, OnInit {
  @Input() scoreType!: string;
  @Input() positionType!: string;

  @Input() searchBarText: string = '';

  allRankings: Ranking[] = [];
  averageRankings: Ranking[] = [];
  chunk: Ranking[] = [];

  constructor(private rankingsService: RankingsService) { }

  ngOnInit(): void {
    this.callGetRankingsService();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['positionType'] != undefined || changes['scoreType'] != undefined) {
      this.allRankings= [];
      this.callGetRankingsService();
    }
  }

  chunkArray(array: any[], chunkSize: number): any[] {
    const chunks: any[] = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  }

  callGetRankingsService(): void {
    // this.rankingsService.getRankings(this.scoreType, this.positionType).subscribe(response => {
    this.allRankings = this.rankingsService.getRankings(this.scoreType, this.positionType);
    this.averageRankings = this.allRankings.filter((ranking: Ranking) => {
      return ranking.ranking_src.ranking_src_name === 'AVERAGE';
    });
    this.allRankings = this.allRankings.filter((ranking: Ranking) => {
      return ranking.ranking_src.ranking_src_name !== 'AVERAGE';
    });
    this.allRankings.sort(function (a, b) {
      return a.rank - b.rank || a.ranking_src.ranking_src_name.charCodeAt(0) - b.ranking_src.ranking_src_name.charCodeAt(0) || a.ranking_src.ranking_src_name.charCodeAt(1) - b.ranking_src.ranking_src_name.charCodeAt(1);
    });
    this.averageRankings.sort(function (a, b) {
      return a.rank - b.rank;
    });
    this.sliceAverageRankingsByPosition();
  }

  sliceAverageRankingsByPosition(): void {
    if(this.positionType == 'overall') {
      this.averageRankings = this.averageRankings.slice(0,100)
    }
    else if(this.positionType == 'qb') {
      this.averageRankings = this.averageRankings.slice(0,32)
    }
    else if(this.positionType == 'rb'){
      this.averageRankings = this.averageRankings.slice(0,50)
    }
    else if(this.positionType == 'wr'){
      this.averageRankings = this.averageRankings.slice(0,50)
    }
    else if(this.positionType == 'te'){
      this.averageRankings = this.averageRankings.slice(0,35)
    }
  }
}