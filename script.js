'use strict';

alert("Угадай число от 1 до 100");


function randomNumber(){
    return Math.ceil(Math.random() * (100 - 1) + 1);
}

let game = function (randomNumber) {
    let randomNum = randomNumber;
    console.log(randomNum);
    
    let userAnswer = (function () {
        return prompt("Гадай", "1");
    }());

    

    if (+userAnswer === randomNum) {
        alert('Поздравляю, Вы угадали!!!');
        return true; 
    } else if (+userAnswer > randomNum) {
        alert("The number is smaller");
        return game(randomNum);
    } else if (+userAnswer < randomNum && userAnswer !== null) {
        alert("The number is bigger");
        return game(randomNum);
    } else if(isNaN(+userAnswer)) {
        alert("Введи число!");
        return game(randomNum);
    } else if(userAnswer === null){
        alert("Game over");
        return false;
    }
};

game(randomNumber());