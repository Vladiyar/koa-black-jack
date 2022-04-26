import React from 'react';
import Container from "./components/Container/Container";
import Sidebar from "./components/Container/Sidebar";
import GameArea from "./components/Container/GameArea";


console.log(123)
function fetchMovieHandler(url) {
    return fetch(url)
        .then(response => response.json());
}

setTimeout(() => {
    fetchMovieHandler('https://randomuser.me/api').then((r) => {
        console.log(r)});
}, 1000)
setTimeout(() => {

    fetchMovieHandler('http://localhost:3000/game').then((r) => {
        console.log(r)});

}, 2000)
setTimeout(() => {

    fetchMovieHandler('http://localhost:3000/hit').then((r) => {
        console.log(r)});

}, 3000)
setTimeout(() => {

    fetchMovieHandler('http://localhost:3000/game').then((r) => {
        console.log(r)});
}, 4000)
console.log(321)
const App = () => {



    // const gameArea = document.getElementById("game-area");
    //
    // function createPlayerTable(playersArray) {
    //     for (let i = 0; i < playersArray.length; i++) {
    //
    //
    //         const player = document.createElement('div');
    //         const playerName = document.createElement('div');
    //         const playerHand = document.createElement('div');
    //         const playerScore = document.createElement('div');
    //
    //         player.setAttribute("id", "player-" + i);
    //         playerName.setAttribute("id", "name-" + i);
    //         playerHand.setAttribute("id", "hand-" + i);
    //         playerScore.setAttribute("id", "score-" + i);
    //
    //         player.className += "player";
    //         playerName.className += "player-name";
    //         playerHand.className += "player-hand";
    //         playerScore.className += "player-score";
    //
    //         player.appendChild(playerName).innerText = "player " + i;
    //         player.appendChild(playerHand);
    //         player.appendChild(playerScore);
    //
    //         gameArea.appendChild(player);
    //
    //     }
    // }
    //
    // createPlayerTable(g.players)
    //
    //
    // function startPlayerTurn() {
    //     const element = document.getElementById("player-" + g.gameState);
    //     element.style.borderColor = "green";
    //     element.style.boxShadow = "0 0 20px green";
    // }
    //
    // function stopPlayerTurn() {
    //     const element = document.getElementById("player-" + g.gameState);
    //     element.style.borderColor = "#575757";
    //     element.style.boxShadow = "none";
    // }
    //
    //
    // const gameCardSuits = {
    //     spaces: '♠',
    //     clubs: '♣',
    //     hearts: '♥',
    //     diamonds: '♦'
    // }
    //
    // function addCard() {
    //     g.players[g.gameState].drawCard(g.card.addCard()) > 21 ? g.players[g.gameState].isCanDraw = false : null;
    //     document.getElementById('score-' + g.gameState).innerText = g.players[g.gameState].handValue;
    //     // setInterval(() => {g.players[g.gameState].handValue > 21 ? document.getElementById('score-' + g.gameState).innerText = 'Overdrawn': null}, 1000)
    //
    //     const playerHand = document.getElementById('hand-' + g.gameState);
    //     const card = document.createElement("div");
    //     const cardSuitTop = document.createElement("div");
    //     const cardValue = document.createElement("div");
    //     const cardSuitBottom = document.createElement("div");
    //
    //     card.className += "card";
    //     playerHand.className = "player-hand";
    //
    //     for (let i = 0; i < g.players[g.gameState].cardsArray.length; i++) {
    //         cardSuitTop.innerText = gameCardSuits[g.players[g.gameState].cardsArray[i][0]];
    //         cardValue.innerText = g.players[g.gameState].cardsArray[i][2] ? g.players[g.gameState].cardsArray[i][2] : g.players[g.gameState].cardsArray[i][1];
    //         cardSuitBottom.innerText = gameCardSuits[g.players[g.gameState].cardsArray[i][0]];
    //
    //         g.players[g.gameState].cardsArray[i][0] === 'diamonds' || g.players[g.gameState].cardsArray[i][0] === 'hearts' ? card.style.color = "red" : card.style.color = "black";
    //
    //         card.appendChild(cardSuitTop);
    //         card.appendChild(cardValue);
    //         card.appendChild(cardSuitBottom);
    //
    //         playerHand.appendChild(card);
    //
    //     }
    //
    //     // document.getElementById('card-suit-top'+g.gameState).innerText = gameCardSuits[g.players[g.gameState].cardsArray[g.players[g.gameState].cardsArray.length-1][0]];
    //     // document.getElementById('card-value'+g.gameState).innerText = g.players[g.gameState].cardsArray[g.players[g.gameState].cardsArray.length-1][2] ? g.players[g.gameState].cardsArray[g.players[g.gameState].cardsArray.length-1][2] : g.players[g.gameState].cardsArray[g.players[g.gameState].cardsArray.length-1][1];
    //     // document.getElementById('card-suit-bottom'+g.gameState).innerText = gameCardSuits[g.players[g.gameState].cardsArray[g.players[g.gameState].cardsArray.length-1][0]];
    //     if (!g.players[g.gameState].isCanDraw) {
    //         g.players[g.gameState].isPlayerDraw = false;
    //         const element = document.getElementById("player-" + g.gameState);
    //         element.style.boxShadow = "none"
    //         element.style.borderColor = "red";
    //         nextPlayer();
    //     }
    // }
    //
    // function nextPlayer() {
    //     g.players[g.gameState].isCanDraw ? stopPlayerTurn() : null;
    //     const winner = g.nextPlayer();
    //
    //     if (g.isGameStarted) {
    //         startPlayerTurn()
    //     }
    //
    //     if (winner && winner['highestHand'] === 0) {
    //         document.getElementById('winner-info').innerText = "It's a draw";
    //         document.getElementById('module-window').className = "open-window";
    //         return;
    //     }
    //     if (winner) {
    //         document.getElementById('winner-info').innerText = 'Won ' + winner['winnerName'] + ' with ' + winner['highestHand'];
    //         document.getElementById('module-window').className = "open-window";
    //     }
    // }
    //
    //
    // for (let i = 0; i < g.players.length; i++) {
    //     addCard();
    //     addCard();
    //     nextPlayer();
    // }
    // g.isGameStarted = true;
    //
    // startPlayerTurn();

    function restart() {
        location.reload()
    }

    const buttonAddCard = document.getElementById('hit');
    const buttonNextPlayer = document.getElementById('stand');
    const cardBack = document.getElementById('card-back');
    const buttonPlayAgain = document.getElementById('play-again');

    // buttonAddCard.addEventListener("click", addCard)
    // buttonNextPlayer.addEventListener("click", nextPlayer)
    // cardBack.addEventListener("click", addCard)
    buttonPlayAgain.addEventListener("click", restart)

    return (
        <div>
            <Container>
                <GameArea/>
              <Sidebar>

              </Sidebar>
            </Container>
        </div>
    );
}

export default App;