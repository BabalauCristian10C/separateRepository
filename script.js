'use strict';

function randomNumber(){
    return Math.ceil(Math.random() * (100 - 1) + 1);
}

let game = function () {
    alert("The game started!");
    let randomNum = randomNumber();
    console.log(randomNum);

    let mainCicle = (function () {
        let userAnswer = prompt("Гадай", "1");
        if (+userAnswer === randomNum) {
            alert('Поздравляю, Вы угадали!!!');
            return;
        } else if (+userAnswer > randomNum) {
            alert("The number is smaller");
        } else if (+userAnswer < randomNum && userAnswer !== null) {
            alert("The number is bigger");
        } else if(isNaN(+userAnswer)) {
            alert("Введи число!");
        } else if(userAnswer === null){
            alert("Game over");
            return;
        }
        mainCicle();
    });
    mainCicle();
};

game();