export class RankingSource {
    rankingSrcName: string;
    rankingSrcUrl: string;
    date: string;
    scoringType: string;
    positionRankingType: string;

    constructor(rankingSrcName: string, rankingSrcUrl: string, date: string, scoringType: string, positionRankingType: string) {
        this.rankingSrcName = rankingSrcName;
        this.rankingSrcUrl = rankingSrcUrl;
        this.date = date;
        this.scoringType = scoringType;
        this.positionRankingType = positionRankingType;
    }
}