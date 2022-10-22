'use strict';

const eBtn = document.querySelector('#e_btn'),
    btn = document.querySelector('#btn'),
    inputText = document.querySelector('#text'),
    square = document.querySelector('#square'),
    inputRange = document.querySelector('#range'),
    circle = document.querySelector('#circle'),
    rangeSpan = document.querySelector('#range-span');

eBtn.style.display = 'none';

const changerColor = function () {
    square.style.backgroundColor = inputText.value;
};

rangeSpan.innerHTML = '50%';
circle.style.width = '50' + '%';
circle.style.height = '50' + '%';

const changerSize = function (e) {
    rangeSpan.textContent = e.target.value + '%';
    circle.style.width = e.target.value + '%';
    circle.style.height = e.target.value + '%';
};

btn.addEventListener('click', changerColor);
inputRange.addEventListener('input', changerSize);