export default class Player {
    name: string;
    score: number;
    phase: number;

    constructor(name: string) {
        this.name = name;
        this.score = 0;
        this.phase = 1;
    }
}