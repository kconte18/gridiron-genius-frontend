export class Player {
    playerName: string;
    position: string;
    team: string;
    bye_week: number;

    constructor(playerName: string, position: string, team: string, bye_week: number) {
        this.playerName = playerName;
        this.position = position;
        this.team = team;
        this.bye_week = bye_week;
    }
}