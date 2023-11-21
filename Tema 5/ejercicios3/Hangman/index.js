window.onload = () => {
lives = 10;
randomCity = cities[Math.floor(Math.random() * cities.length)];
hiddenWord = randomCity.split("");
answer = document.getElementById("answer");
for (let i = 0; i < hiddenWord.length; i++) {
    let letter = document.createElement("span");
    answer.appendChild(letter);
}

lettersAlphabet = document.querySelectorAll(".alphabet span");
lettersAlphabet.forEach((letter) => {
    letter.addEventListener("click", () => {
        checkingLetter(letter, hiddenWord);
        checkAnswer();
    });
}
);
document.getElementById("reset").addEventListener("click", () => {
    resetGame();
});
}
var randomCity;
var HiddenWord;
var answer
var lettersAlphabet;
var cities = ["granada", "malaga", "cordoba", "madrid", "sevilla"];

function checkingLetter(letter, city) {
    let letterDisplay = document.querySelectorAll("#answer span");
    if (city.includes(letter.innerHTML)) {
        for (i = 0; i < city.length; i++) {
            if (letter.innerHTML == city[i]) {
                letterDisplay[i].innerHTML = letter.innerHTML;
                letter.style.backgroundColor = "lightgreen";
                letter.style.color = "white";
            }
        }
    } else {
        letter.style.pointerEvents = "none";
        letter.style.backgroundColor = "lightcoral";
        letter.style.color = "white";
        loseHeart();
    }
}

function loseHeart() {
    lives--;
    if (lives == 0) {
        document.getElementById("lose").innerHTML = "You lost!";
        lettersAlphabet.forEach((letter) => {
            letter.style.pointerEvents = "none";
            letter.style.backgroundColor = "grey";

        });
    }
    hearts = document.getElementsByTagName("img");
    for (let i = lives; i < 10; i++) {
        hearts[i].src = "emptyHeart.png";
        hearts[i].classList.add("lostLife");
    }
}

function checkAnswer(){
    let answer = document.querySelectorAll("#answer span");
    let answerArray = [];
    for (let i = 0; i < answer.length; i++) {
        answerArray.push(answer[i].innerHTML);
    }
    if (answerArray.join("") == hiddenWord.join("")) {
        document.getElementById("win").innerHTML = "You win!";
    }
}

function resetGame(){
    lives = 10;
    document.getElementById("lose").innerHTML = "";
    document.getElementById("win").innerHTML = "";
    hearts = document.getElementsByTagName("img");
    for (let i = 0; i < 10; i++) {
        hearts[i].src = "fullHeart.png";
        hearts[i].classList.remove("lostLife");
    }
    lettersAlphabet.forEach((letter) => {
        letter.style.pointerEvents = "auto";
        letter.style.backgroundColor = "";
        letter.style.color = "";
    });
    randomCity = cities[Math.floor(Math.random() * cities.length)];
    hiddenWord = randomCity.split("");
    answer.innerHTML = "";
    for (let i = 0; i < hiddenWord.length; i++) {
        let letter = document.createElement("span");
        answer.appendChild(letter);
    }
}