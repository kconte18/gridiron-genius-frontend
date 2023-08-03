export class RankingSource {
    ranking_src_name: string;
    ranking_src_url: string;
    date: string;
    scoring_type: string;
    position_ranking_type: string;

    constructor(rankingSrcName: string, rankingSrcUrl: string, date: string, scoringType: string, positionRankingType: string) {
        this.ranking_src_name = rankingSrcName;
        this.ranking_src_url = rankingSrcUrl;
        this.date = date;
        this.scoring_type = scoringType;
        this.position_ranking_type = positionRankingType;
    }
}