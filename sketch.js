var playerCount;
var gameState = 0
var database;
var form,player,game;
var allplayers;
function setup(){
    createCanvas(displayWidth-20,displayHeight-30);
    database = firebase.database()
    game = new Game()
    game.getState()
    game.startGame()
}

function draw(){
    if(playerCount===4){game.update(1)}
    if(gameState===1){
       clear()
       game.play()
    }

}

