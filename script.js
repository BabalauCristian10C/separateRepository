'use strict';
let y = 5;


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
    while (userAnswer !== randomNum) {
        console.log(userAnswer);
        if (userAnswer === null){
            alert('Game over');
            return false;
        }
        else if (isNaN(+userAnswer) || +userAnswer > 100) {
            alert("Введи число");
            userAnswer = prompt("Гадай", "1");
            console.log(userAnswer);
        }
        else {
            if(+userAnswer < randomNum) {
                alert("число больше");
                userAnswer = prompt("Гадай", "1");
            } else if (+userAnswer > randomNum) {
                alert("число меньше");
                userAnswer = prompt("Гадай", "1");
            } else {
                alert("Угадал");
                break;
            }
        }
    }
};
game(start());