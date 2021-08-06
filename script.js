'use strict';


let start = function() {
    alert("Угадай число от 1 до 100");
    function randomNumber(){
        return Math.ceil(Math.random() * (100 - 1) + 1);
    }
    return randomNumber();
};

let game = function (randomNum) {
    console.log(randomNum);
    let userAnswer = prompt("Гадай", "1");
    console.log(userAnswer);
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

game(start());