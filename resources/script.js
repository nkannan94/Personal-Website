// Reveals and hides project descriptions when clicking on the heading text
const project1Show = document.getElementsByClassName('arrow-up')[0];
const project1Hide = document.getElementsByClassName('arrow-down')[0];

const project2Show = document.getElementsByClassName('arrow-up')[1];
const project2Hide = document.getElementsByClassName('arrow-down')[1];

const project3Show = document.getElementsByClassName('arrow-up')[2];
const project3Hide = document.getElementsByClassName('arrow-down')[2];

const project1 = document.getElementsByClassName('description-container')[0];
const project2 = document.getElementsByClassName('description-container')[1];
const project3 = document.getElementsByClassName('description-container')[2];

// Toggle project1
const showDescription1 = function() {
    project1.style.display = 'block';
    project1Show.style.display = 'none';
    project1Hide.style.display = 'block';
}

project1Show.addEventListener('click', showDescription1);

const hideDescription1 = function() {
    project1.style.display = 'none';
    project1Show.style.display = 'block';
    project1Hide.style.display = 'none';
}

project1Hide.addEventListener('click', hideDescription1);

// Toggle Project2
const showDescription2 = function() {
    project2.style.display = 'block';
    project2Show.style.display = 'none';
    project2Hide.style.display = 'block';
}

project2Show.addEventListener('click', showDescription2);

const hideDescription2 = function() {
    project2.style.display = 'none';
    project2Show.style.display = 'block';
    project2Hide.style.display = 'none';
}

project2Hide.addEventListener('click', hideDescription2);

// Toggle Project3
const showDescription3 = function() {
    project3.style.display = 'block';
    project3Show.style.display = 'none';
    project3Hide.style.display = 'block';
}

project3Show.addEventListener('click', showDescription3);

const hideDescription3 = function() {
    project3.style.display = 'none';
    project3Show.style.display = 'block';
    project3Hide.style.display = 'none';
}

project3Hide.addEventListener('click', hideDescription3);