'use strict';

const eBtn = document.querySelector('#e_btn'),
    btn = document.querySelector('#btn'),
    inputText = document.querySelector('#text'),
    square = document.querySelector('#square'),
    inputRange = document.querySelector('#range'),
    circle = document.querySelector('#circle');

eBtn.style.display = 'none';

const changerColor = function () {
    if (inputText.value === 'yellow') {
        square.style.backgroundColor = 'yellow';
    }
    if (inputText.value === 'red') {
        square.style.backgroundColor = 'red';
    }
    if (inputText.value === 'green') {
        square.style.backgroundColor = 'green';
    }
};

const changerSize = function (e) {
    circle.style.width = e.target.value + '%';
    circle.style.height = e.target.value + '%';
};

btn.addEventListener('click', changerColor);
inputRange.addEventListener('input', changerSize);