export class Player {
    player_name: string;
    position: string;
    team: string;
    bye_week: number;

    constructor(playerName: string, position: string, team: string, bye_week: number) {
        this.player_name = playerName;
        this.position = position;
        this.team = team;
        this.bye_week = bye_week;
    }
}