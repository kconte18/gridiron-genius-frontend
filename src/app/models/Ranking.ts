import { RankingSource } from "./RankingSource";
import { Player } from "./Player";

export class Ranking{
    rankingSrc: RankingSource;
    player: Player;
    rank: number;

    constructor(rankingSrc: RankingSource, player: Player, rank: number) {
        this.rankingSrc = rankingSrc;
        this.player = player;
        this.rank = rank;
    }
}