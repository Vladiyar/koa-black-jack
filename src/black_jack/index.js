const Game = require("./Game");
const Player = require("./Player");


let g = new Game(new Player, new Player);
const state = exports.state = () => {
    return [{
        'player': g.players[0].playerName,
        'isCanDraw': g.players[0].isCanDraw,
        'cards': g.players[0].cardsArray
    },
        {
            'player': g.players[1].playerName,
            'isCanDraw': g.players[1].isCanDraw,
            'cards': g.players[1].cardsArray
        }];

}


function startPlayerTurn () {
    // const element = document.getElementById("player-" + g.gameState);
    // element.style.borderColor = "green";
    // element.style.boxShadow = "0 0 20px green";
}

function stopPlayerTurn () {
    // const element = document.getElementById("player-" + g.gameState);
    // element.style.borderColor = "#575757";
    // element.style.boxShadow = "none";
}


const gameCardSuits = {
    spaces: '♠',
    clubs: '♣',
    hearts: '♥',
    diamonds: '♦'
}

const addCard = exports.addCard = () => {
    g.players[g.gameState].drawCard(g.card.addCard()) > 21 ? g.players[g.gameState].isCanDraw = false : null;
    // document.getElementById('score-' + g.gameState).innerText = g.players[g.gameState].handValue;

    // const playerHand = document.getElementById('hand-' + g.gameState);
    // const card = document.createElement("div");
    // const cardSuitTop = document.createElement("div");
    // const cardValue = document.createElement("div");
    // const cardSuitBottom = document.createElement("div");
    //
    // card.className += "card";
    // playerHand.className = "player-hand";

    // for (let i = 0; i < g.players[g.gameState].cardsArray.length; i++) {
    //     cardSuitTop.innerText = gameCardSuits[g.players[g.gameState].cardsArray[i][0]];
    //     cardValue.innerText = g.players[g.gameState].cardsArray[i][2] ? g.players[g.gameState].cardsArray[i][2] : g.players[g.gameState].cardsArray[i][1];
    //     cardSuitBottom.innerText = gameCardSuits[g.players[g.gameState].cardsArray[i][0]];
    //
    //     g.players[g.gameState].cardsArray[i][0] === 'diamonds' || g.players[g.gameState].cardsArray[i][0] === 'hearts' ? card.style.color = "red" : card.style.color = "black";
    //
    //     card.appendChild(cardSuitTop);
    //     card.appendChild(cardValue);
    //     card.appendChild(cardSuitBottom);
    //
    //     playerHand.appendChild(card);

    // }

    if (!g.players[g.gameState].isCanDraw) {
        g.players[g.gameState].isPlayerDraw = false;
        // const element = document.getElementById("player-" + g.gameState);
        // element.style.boxShadow = "none"
        // element.style.borderColor = "red";
        nextPlayer();

    }
    return [{
        'player': g.players[0].playerName,
        'isCanDraw': g.players[0].isCanDraw,
        'cards': g.players[0].cardsArray
    },
        {
            'player': g.players[1].playerName,
            'isCanDraw': g.players[1].isCanDraw,
            'cards': g.players[1].cardsArray
        }];
}

const nextPlayer = exports.nextPlayer = () => {
    g.players[g.gameState].isCanDraw ? stopPlayerTurn() : null;
    const winner = g.nextPlayer();

    if (g.isGameStarted) {
        startPlayerTurn()
    }

    if (winner && winner['highestHand'] === 0) {
        return "It's a draw";
    }
    if (winner) {
        return 'Won ' + winner['winnerName'] + ' with ' + winner['highestHand'];
    }

}


for (let i = 0; i < g.players.length; i++) {
    addCard();
    addCard();
    nextPlayer();
}
g.isGameStarted = true;

startPlayerTurn();

const restart = exports.restart = () => {
    g = new Game(new Player(), new Player());
    for (let i = 0; i < g.players.length; i++) {
        addCard();
        addCard();
        nextPlayer();
    }
    g.isGameStarted = true;

    startPlayerTurn();
    return 'restarted';
}