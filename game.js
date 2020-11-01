const number1box = document.getElementById("number1")
const number2box = document.getElementById("number2")
const number3box = document.getElementById("number3")

var score = 0
var operator

var number1
var numbe2
var number3

function randomise() {
    number1 = Math.round(Math.random() * 100)
    number2 = Math.round(Math.random() * 100)

    if (number1 < number2) {
        var extra = number1
        number1 = number2
        number2 = extra
    }

    operator = Math.ceil(Math.round() * 5)


    switch (operator) {
        case 1:
            number3 = number1 + number2;
            break;
        case 2:
            number3 = number1 - number2;
            break;
        case 3:
            number3 = number1 * number2;
            break;
        case 4:
            number3 = Math.floor(number1 / number2);
            number1 = number3 * number2;
            break;
        case 5:
            number3 = number1 % number2;
            break;
        default:
            number3 = number1 % number2;
            break;

    }
    number1box.innerHTML = number1;
    number2box.innerHTML = number2;
    number3box.innerHTML = number3;
}

randomise();

const plus = document.getElementById("plus")
const minus = document.getElementById("minus")
const mul = document.getElementById("mul")
const divide = document.getElementById("divide")
const modulus = document.getElementById("modulus")

plus.onclick = () => {
    if ((number1 + number2) === number3) {
        score++;
        randomise();
        resetTime(timerId);
    } else {
        location.href = "gameover.html?score=" + score;
    }
}

minus.onclick = () => {
    if ((number1 - number2) === number3) {
        score++;
        randomise();
        resetTime(timerId);
    } else {
        location.href = "gameover.html?score=" + score;
    }
}

mul.onclick = () => {
    if ((number1 * number2) === number3) {
        score++;
        randomise();
        resetTime(timerId);
    } else {
        location.href = "gameover.html?score=" + score;
    }
}

divide.onclick = () => {
    if ((number1 / number2) === number3) {
        score++;
        randomise();
        resetTime(timerId);
    } else {
        location.href = "gameover.html?score=" + score;
    }
}

modulus.onclick = () => {
    if ((number1 % number2) === number3) {
        score++;
        randomise();
        resetTime(timerId);
    } else {
        location.href = "gameover.html?score=" + score;
    }
}

var time = 5;
var timer = document.getElementById("timer");
var timerId;

function startTimer() {
    time = 20;
    timer.innerHTML = time;
    timerId = setInterval(() => {
        time--;
        if (time == 0) {
            location.href = "./gameover.html?score" + score;
        }
        timer.innerHTML = time;
    }, 1000);
}

function resetTime(intervalId) {
    clearInterval(intervalId);
    startTimer();
}

startTimer();