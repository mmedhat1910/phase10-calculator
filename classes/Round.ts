import { Player } from './Player';

export class Round {
  number: number;
  players: Player[];
  ended: boolean = false;

  constructor(number: number, players: Player[]) {
    this.number = number;
    this.players = players;
  }
  endRound(finalScores: { player: string; score: number }[]) {
    this.ended = true;
    this.players = this.players.map((player) => {
      return {
        ...player,
        score:
          player.score -
          finalScores.find((score) => score.player === player.name).score,
      };
    });
  }
}
