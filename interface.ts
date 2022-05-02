export interface Game {
    name: string;
    players: Player[];
    rounds: Round[];
    currentRound: number;
    dateCreated: Date;  
}

export interface Player {
    name: string;
    score: number;
    phase: number;
}
export interface Round {
    number: number;
    players: Player[];
}

export interface Card {
    name: string;
    value: number;
}
