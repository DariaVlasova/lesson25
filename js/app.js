"use strict"
//DOM Урок №13
//Задача 1 - исправила
const lessonText= document.querySelector('[data-say-hi]');
console.log (lessonText.dataset.sayHi);

//Урок 15 -События.
const searchForm = document.forms[0];
const searchInput = searchForm.search;
const searchButton = document.querySelector('.form__button');
const counterForm = document.querySelector('.form__counter')
const inputLimit = searchInput.getAttribute('maxlength');
const txtCounter = document.querySelector('.form__counter span')


document.addEventListener("click", function (event) {
    if (event.target.closest('.form__button')) {
        menuActive();
    }
    if (!event.target.closest('.form')) {
        menuInactive();
    }
})

searchInput.addEventListener("input", txtSetCounter)

function txtSetCounter() {
    const txtCounterResult = inputLimit - searchInput.value.length;
    txtCounter.innerHTML = txtCounterResult;
}


function menuActive() {
    searchForm.classList.add('_active');
    searchInput.classList.add('_active');
    searchButton.classList.add('_active');
    counterForm.classList.add('_active');
}

function menuInactive() {
    searchForm.classList.remove('_active');
    searchInput.classList.remove('_active');
    searchButton.classList.remove('_active');
    counterForm.classList.remove('_active');
    searchInput.value = "";
}


document.addEventListener("keyup", function (event) {
    if (event.code === "Escape") {
        menuInactive();
    }
})