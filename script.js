'use strict';
let y = 5;


let start = function() {
    alert("Угадай число от 1 до 100");

    return function() {
        return Math.ceil(Math.random() * (100 - 1) + 1);
    };
};

let game = function (randomNumber) {
    let remakeNumber = randomNumber,
        randomNum = randomNumber(),
        tries = 0,
        tryAgain = true;
    console.log(randomNum);
    let userAnswer = prompt("Гадай");
    while (userAnswer !== randomNum || userAnswer === null || !!userAnswer || !!tryAgain || tryAgain !==false) {
        if (userAnswer === null){
            alert('Game over');
            break;
        }
        else if (isNaN(+userAnswer) || +userAnswer > 100) {
            alert("Введи число");
            userAnswer = prompt(`Гадай | попыток осталось ${10-tries}`   , "1");
            console.log(userAnswer);
        }
        else if (tries === 10) {
            alert("you've lost");
            let tryAgain = confirm("у вас кончились попытки, попробывать еще раз?");
            if (tryAgain === null){
                alert('Game over');
                return false;
            } else {
                game(start())
            }
        }
        else{
            if(+userAnswer < randomNum) {
                tries++;
                alert(`число больше | попыток осталось ${10-tries}`);
                userAnswer = prompt("Гадай ", "1");
            } else if (+userAnswer > randomNum) {
                tries++;
                alert(`число меньше | попыток осталось ${10-tries}`);
                userAnswer = prompt("Гадай", "1");
            } else {
                tryAgain = confirm("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?");
                if (tryAgain === true) {
                    tryAgain = false;
                    game(start());
                } else if (tryAgain === false){
                    throw new Error("urgent exit");
                }
                console.log(tryAgain);
            }
        }
    }
    return "gameover";
};

game(start());