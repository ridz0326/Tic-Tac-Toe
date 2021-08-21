import Game from "./Game.js"
import GameView from "./GameView.js"

let game = new Game();
let gameView = new GameView();

document.querySelector(".restart")
.addEventListener("click",() => {
    onRestartClick();
})

let tiles = document.querySelectorAll(".board-tile")
tiles.forEach((tile) => {
    tile.addEventListener("click", () => {
        onTileClicked(tile.dataset.index);
    })
})

function onTileClicked(i){
    //do something
    game.makeMove(i);        // make a move
    gameView.updateBoard(game);     // update board
}

function onRestartClick() {
    game = new Game();
    gameView.updateBoard(game);
}

