(function(){

    'use strict';
    console.log('reading js');

    const startGame = document.querySelector('#startgame');
    const gameControl = document.querySelector('#gamecontrol');
    const game = document.querySelector('#game');
    const score1 = document.querySelector('#score1');
    const score2 = document.querySelector('#score2');
    const actionArea = document.querySelector('#actions');

    const gameData = {
        dice: ['images/pad1.png', 'images/pad2.png', 'images/pad3.png', 'images/pad4.png', 'images/pad5.png', 'images/pad6.png'],
        players: ['player 1', 'player 2'],
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 29
    };

    //This gets the current player: 
     console.log(gameData.players[gameData.index])


    startGame.addEventListener("click", function(){
        gameControl.innerHTML = '<h2>The Game Has Started</h2>';
        gameControl.innerHTML += '<button id="quit">Wanna Quit?   <i class="fas fa-times"></i></button>';
        
        let myAudio = document.querySelector('#audio1')
        myAudio.play();

        document.getElementById('quit').addEventListener("click",function(){
            location.reload();
        });
        //console.log("set up the turn!");
        setUpTurn();
    });

    function setUpTurn(){
        game.innerHTML = `<p>Roll the dice for ${gameData.players[gameData.index]}</p>`;
        actionArea.innerHTML = '<button id="roll">Roll Lilypad Dice  <i class="fas fa-fish"></i></i></button>';
        document.querySelector('#roll').addEventListener('click', function(){
            console.log('Roll the Dice');
            throwDice();
        });
        
    }

//new stuff
    function throwDice() {
        actionArea.innerHTML = '';
        gameData.roll1 = Math.floor(Math.random() * 6) + 1;
        gameData.roll2 = Math.floor(Math.random() * 6) + 1; 
        game.innerHTML = `<p>Roll the dice for ${gameData.players[gameData.index]}</p>`;

        if(gameData.roll1 == 6) {
            game.innerHTML += `<img src ='${gameData.dice[gameData.roll1-1]}' class="large"> <img src='${gameData.dice[gameData.roll2-1]}'></img>`;
            
        }
        else if (gameData.roll2 == 6) {
            game.innerHTML += `<img src='${gameData.dice[gameData.roll1-1]}'> <img src ='${gameData.dice[gameData.roll2-1]}' class="large">`;
        }
        else {
            game.innerHTML += `<img src='${gameData.dice[gameData.roll1-1]}'> <img src='${gameData.dice[gameData.roll2-1]}'></img>`;

        }


        gameData.rollSum = gameData.roll1 + gameData.roll2;

        //if two 1's are rolled...
        if(gameData.rollSum === 2){
            //console.log('snake eyes were rolled!');
            game.innerHTML += '<p>Oh snap, snake eyes!</p>';
            gameData.score[gameData.index] = 0;
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            setTimeout(setUpTurn, 3000);
            showCurrentScore();
            let myAudio = document.querySelector('#audio4')
            myAudio.play();
        } 
        //if either die is a 1
        else if (gameData.roll1 === 1 || gameData.roll2 === 1){
            //console.log("one of the two dice was a 1");
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            game.innerHTML += `<p>One of your rolls was a one, switching to ${gameData.players[gameData.index]}</p>`;
            setTimeout(setUpTurn, 3000);

            let myAudio = document.querySelector('#audio3')
            myAudio.play();
        } 
        //if neither die is a 1 - winning points!
        else {
            //console.log("the game proceeds");
            gameData.score[gameData.index]=gameData.score[gameData.index] + gameData.rollSum;
            actionArea.innerHTML = '<button id="rollagain">Roll Again</button> <button id="pass">Pass</button>';
            let myAudio = document.querySelector('#audio2')
            myAudio.play();

            document.getElementById('rollagain').addEventListener('click', function(){
                setUpTurn();
            });

            document.getElementById('pass').addEventListener('click', function(){
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                setUpTurn();
            });
        }  

        checkWinningCondition();

    } //end throw dice function...


    function checkWinningCondition(){
        if(gameData.score[gameData.index] > gameData.gameEnd){
            blank.innerHTML = `<h2>${gameData.players[gameData.index]} wins with ${gameData.score[gameData.index]}</h2>`;
            actionArea.innerHTML = '';
            document.getElementById('quit').innerHTML = 'Start a new game';
            let myAudio = document.querySelector('#audio5')
            myAudio.play();

            //overlay
            
        } else {
            //show current score!
            showCurrentScore()
        }
    }

    function showCurrentScore(){
        score1.innerHTML = `<p>${gameData.players[0]} <br> <span> ${gameData.score[0]} lilypads  </span></p> `;

        score2.innerHTML = `<p>${gameData.players[0]} <br> <span> ${gameData.score[1]} lilypads  </span> </p>`;
    }



})(); //END