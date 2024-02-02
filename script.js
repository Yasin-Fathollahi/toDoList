'use strict';
//list itself
const enterButton = document.getElementsByTagName('button')[0];
// const removeButtons = document.querySelectorAll('.remove');
const ul = document.querySelector('ul');
const input = document.getElementById('userinput');
const li = document.querySelectorAll('li');

const inputLength = function () {
    return input.value.length;
};

const addListItem = function () {
    const li = document.createElement('li');
    const text = document.createTextNode(input.value);
    const removeButt = removeButton();
    li.appendChild(text);
    ul.appendChild(li);
    li.appendChild(removeButt);
    removeButt.addEventListener('click', function () {
        li.remove();
    });

    li.addEventListener('click', function () {
        done(li);
    });
    input.value = '';
};

const addOnMouseClick = function () {
    if (inputLength()) {
        addListItem();
    }
};

const addOnKeyPress = function (event) {
    if (inputLength() && event.key === 'Enter') {
        addListItem();
    }
};

const done = function (elem) {
    elem.classList.toggle('done');
};

const removeButton = function () {
    const button = document.createElement('button');
    const text = document.createTextNode('remove');
    button.setAttribute('type', 'button');
    button.classList.add('remove');
    button.appendChild(text);
    return button;
};

for (let i = 0; i < li.length; i++) {
    const button = removeButton();
    li[i].appendChild(button);
}

const removeButtons = document.querySelectorAll('.remove');

for (let i = 0; i < li.length; i++) {
    removeButtons[i].addEventListener('click', function () {
        li[i].remove();
    });
}

//done
for (let i = 0; i < li.length; i++) {
    li[i].addEventListener('click', function () {
        done(li[i]);
    });
}
enterButton.addEventListener('click', addOnMouseClick);
input.addEventListener('keypress', addOnKeyPress);
