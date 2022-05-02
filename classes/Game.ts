import Player from './Player';
import { Round } from './Round';

export default class Game {
  static instance: Game;

  name: string;
  players: Player[] = [];
  rounds: Round[] = [];
  currentRound: number = 1;
  dateCreated: Date = new Date(Date.now());

  private constructor(name: string, players: Player[]) {
    this.name = name;
    this.players = players;
    this.startRound(players);
  }

  static getInstance(name?: string, players?: Player[]) {
    if (name && players) {
      if (!Game.instance) {
        console.log('Game created');
        Game.instance = new Game(name, players);
      }
      return Game.instance;
    }
  }

  //create overload method to getInstance method with no parameners

  startRound(scores: Player[]) {
    console.log('Start of new round');
    this.rounds.push(new Round(this.currentRound, scores));
  }

  endRound(scores: { player: string; score: number }[]) {
    this.rounds[this.currentRound].endRound(scores);
    this.currentRound++;
  }

  static setInstanceJSON(instance:Game){
    Game.instance = instance;
  }

  toString() {
    return JSON.stringify(this);
  }
}
