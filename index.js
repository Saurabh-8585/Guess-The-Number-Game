let randomNumber = Math.floor(Math.random() * 20 + 1);
let score = 1;
document.getElementById('btn').onclick = function () {
    let userInput = document.getElementById('userInput').value;
    if (randomNumber == userInput) {
        document.getElementById('ans').innerHTML = `<i class="fa-solid fa-circle-check"></i> You took ${score}  Chances to complete the game`;
        document.getElementById('displayScore').innerHTML = `Your score is ${10 - score} out of 10`;
        document.getElementById('displayScore').style.color = 'green';
        document.getElementById('ans').style.color = 'green';
    }
    else if (userInput == '') {
        document.getElementById('ans').innerHTML = `Please enter the number`;

    }
    else if (userInput > randomNumber) {
         score++
        document.getElementById('ans').innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> Your guess greater than that number`;
        document.getElementById('ans').style.color = "red";
    }

    else if (userInput < randomNumber) {
        score++
        document.getElementById('ans').innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> Your guess is less than that number`;
        document.getElementById('ans').style.color = "red";
    }
}
