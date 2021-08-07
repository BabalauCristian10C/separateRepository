'use strict';

function randomNumber(){
    return Math.ceil(Math.random() * (100 - 1) + 1);
}

let game = function () {
    alert("The game started!");
    let randomNum = randomNumber(),
        tries = 10;

    console.log(randomNum);
    
    let mainCicle = (function () {
        let userAnswer = prompt("Гадай", "1"),
            startOver = function (alertText) {
                let startOver = confirm(alertText);
                if (startOver) {
                    tries = 10;
                    return mainCicle();
                } else {
                    return;
                }
            };

        if (+userAnswer === randomNum) {
            return startOver('Congrats you won, do you want to strat again?');
        } else if (+userAnswer > randomNum && userAnswer !== null) {
            tries--;
            alert(`The number is smaller, there are left ${ tries } attemps`);
        } else if (+userAnswer < randomNum && userAnswer !== null) {
            tries--;
            alert(`The number is bigger , there are left ${ tries } attemps`);
        } else if(isNaN(+userAnswer)) {
            alert(`Input a number!`);
        } else if(userAnswer === null || startOver === false){
            alert(`Game over`);
            return startOver("Do you wish to try again?");
        } 
        mainCicle();
    });
    mainCicle();
};

game();