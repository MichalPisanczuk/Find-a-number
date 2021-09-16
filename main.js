/*
Game - Find a computer number
Author: Michał Pisańczuk
*/

const checkBtn = document.querySelector('.js-check-btn');
const drawBtn = document.querySelector('.js-draw-btn');
const playAgainBtn = document.querySelector('.js-playagain-btn');
const resultDiv = document.querySelector('.js-result');
let computerNumber = 0;
let count = 0;
let flag = false;

function check() {
    if (flag) {
    const number = document.querySelector('input').value;
    count++;
    if (number > computerNumber) {
        resultDiv.innerHTML = `${number} Number is to big.<br /> Try again <br /> Number of attempts ${count}`;
        document.querySelector('input').value = '';
    } else if (number < computerNumber) {
        resultDiv.innerHTML = `${number} Number is to lower.<br /> Try again <br /> Number of attempts ${count}`;
    } else {
        resultDiv.innerHTML = `Bingo !!! <br /> Number of attempts ${count}`;
    }
    console.log(count);
} else {
    alert('Draw a computer number first');
}
}

function draw() {
    computerNumber = Math.floor(Math.random() * 100);
    drawBtn.classList.add('hidden');
    flag = !flag;
    console.log(computerNumber);
}

function reset() {
    document.querySelector('input').value = '';
    computerNumber = 0;
    count = 0;
    drawBtn.classList.remove('hidden');
    resultDiv.textContent = '';
}



checkBtn.addEventListener('click', check);
drawBtn.addEventListener('click', draw);
playAgainBtn.addEventListener('click', reset);
