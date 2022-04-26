import {Deck} from "./Deck";
export class Game {
    isGameStarted = false;
    gameState = 0;
    players;
    card;

    constructor (...args) {
        this.card = new Deck();
        this.players = args;
        // for (let i = 0; i < this.players.length; i++) {
        //     addCard();
        //     addCard();
        //     nextPlayer();
        // }
        // this.isGameStarted = true;

    }

    nextPlayer() {
        this.gameState !== this.players.length - 1 ? this.gameState++ : this.gameState = 0;

        if (this.isGameStarted) {
            if (this.gameState === 0) {
                const winner = {
                    highestHand: 0,
                    winnerName: '',
                }
                for (let i = 0; i < this.players.length; i++) {
                    (winner['highestHand'] < this.players[i].handValue  && this.players[i].handValue <= 21) ? (winner['highestHand'] = this.players[i].handValue, winner['winnerName'] = 'player ' + i) : null;
                }
                return winner;
            }
        }
    }
}
