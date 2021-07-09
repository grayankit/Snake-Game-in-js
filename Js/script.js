// Constants
let direction = {x: 0 , y: 0};
let foodSound = new Audio("../Audio/food.mp3");
let moveSound = new Audio("../Audio/move.mp3");
let musicSound = new Audio("../Audio/music.mp3");
let gameOverSound = new Audio("../Audio/gameover.mp3");
let speed = 2;
let lastPaintTime = 0;
let snakeArr = [
    {x:13 , y:15}
];


// Game Function
function main(ctime){
    window.requestAnimationFrame(main)
    console.log(ctime)
    if((ctime - lastPaintTime)/1000 < 1/speed){
        return;
    }
    lastPaintTime = ctime;
    gameEngine()
    
}
function gameEngine(){
    // Passing the snake array




    //render the snake and food
    board.inneHTML = "";
    snakeArr.forEach((e,index)=>{
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        snakeElement.classList.add('food');
        board.appendChild(snakeElement);
    })
}



// Logic of game
window.requestAnimationFrame(main);