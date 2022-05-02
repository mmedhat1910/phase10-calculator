import Player  from './Player';
import { Round } from './Round';

export default class Game {
    name: string;
    players: Player[];
    rounds: Round[];
    currentRound: number;
    dateCreated: Date;

    constructor(name: string, players: Player[]) {
        this.name = name;
        this.players = players;
        this.rounds = [];
        this.currentRound = 1;
        this.dateCreated = new Date(Date.now());
    }

    startRound(scores:Player[]) {
        this.rounds.push(new Round(this.currentRound, scores));
    }

    endRound(round: number, scores: {player:string, score:number}[]) {
        this.currentRound++;
        this.rounds[round-1].endRound(scores);
    }
    

}