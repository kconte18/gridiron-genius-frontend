import { RankingSource } from "./RankingSource";
import { Player } from "./Player";

export class Ranking{
    ranking_src: RankingSource;
    player: Player;
    rank: number;

    constructor(rankingSrc: RankingSource, player: Player, rank: number) {
        this.ranking_src = rankingSrc;
        this.player = player;
        this.rank = rank;
    }
}