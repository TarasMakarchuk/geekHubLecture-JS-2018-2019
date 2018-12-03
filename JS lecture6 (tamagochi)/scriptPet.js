let maxLimit = 100;
let minLimit = 0;
let feed, games, walk, relax, doctor, learnJs,
    petDiv, addButton, inputName = {};


class Pet {
    constructor(name, health, satiety, strength, happiness) {
        //ім'я, здоров'я, ситість, сила, щастя
        this.name = name;
        this.health = health;
        this.satiety = satiety; //сытость
        this.strength = strength;
        this.happiness = happiness;
    }

    // Годувати, Гратися, Гуляти, Спати, Лікуватися...
    feed() {
        this.health += 10;
        this.satiety += 15;
    }

    play() {
        this.health += 5;
        this.happiness += 10;
        this.strength += 10;
        this.satiety += -5;
    }

    walk() {
        this.satiety -= 10;
        this.happiness += 7;
        this.strength += 5;
        this.health += 5;
    }

    relax() {
        this.satiety -= 5;
        this.happiness += 5;
        this.health += 5;

    }

    doctor() {
        this.health += 15;
        this.happiness -= 15;
    }

    learnJs() {
        this.satiety -= 10;
        this.health -= 5;
        this.strength -= 7;
        this.happiness += 20;
    }

    subtraction() {
        this.satiety -= 8;
        this.happiness -= 8;
        this.strength -= 8;
        this.health -= 8;
    }

    defineMax() {
        if (this.health > maxLimit) {
            this.health = maxLimit;
        }
        if (this.satiety > maxLimit) {
            this.satiety = maxLimit;
        }
        if (this.strength > maxLimit) {
            this.strength = maxLimit;
        }
        if (this.happiness > maxLimit) {
            this.happiness = maxLimit;
        }
    };

    defineMin() {
        if (this.health <= minLimit) {
            this.health = minLimit;
        }
        if (this.satiety <= minLimit) {
            this.satiety = minLimit;
        }
        if (this.strength <= minLimit) {
            this.strength = minLimit;
        }
        if (this.happiness <= minLimit) {
            this.happiness = minLimit;
        }
    }
}

petDiv = document.getElementById('petDiv');
addButton = document.getElementById('add');
inputName = document.querySelector('input.item');
addButton.addEventListener('click', function () {
    let name = inputName.value;
    inputName.value = '';
    let divBorder = document.createElement('div');
    petDiv.appendChild(divBorder);
    divBorder.classList.add('border');
    let section = document.createElement('section');
    petDiv.appendChild(section);
    section.classList.add('pet');

    let petSection = document.createElement('section');
    section.appendChild(petSection);
    petSection.classList.add('state');
    let petList = document.createElement('ul');
    petSection.appendChild(petList);

    let imageSection = document.createElement('section');
    section.appendChild(imageSection);
    imageSection.classList.add('imgposition');
    let images = document.createElement('img');
    images.setAttribute('src', 'img/1.png');
    imageSection.appendChild(images);

    let buttonsSection = document.createElement('section');
    section.appendChild(buttonsSection);
    buttonsSection.classList.add('btnposition');
    let buttonsBlock = document.createElement('div');
    buttonsSection.appendChild(buttonsBlock);
    let newPet = new Pet(name, 100, 100, 100, 100);

    createLi();

    feed = document.createElement('button');
    feed.classList.add('btn');
    games = document.createElement('button');
    games.classList.add('btn');
    walk = document.createElement('button');
    walk.classList.add('btn');
    relax = document.createElement('button');
    relax.classList.add('btn');
    doctor = document.createElement('button');
    doctor.classList.add('btn');
    learnJs = document.createElement('button');
    learnJs.classList.add('btn');

    sectionDivBtn(feed, 'Feed');
    sectionDivBtn(games, 'Games');
    sectionDivBtn(walk, 'Walk');
    sectionDivBtn(relax, 'Relax');
    sectionDivBtn(doctor, 'Doctor');
    sectionDivBtn(learnJs, 'Learn javascript');

    feed.addEventListener('click', function () {
        newPet.feed();
        repeatElements(newPet);
    });

    games.addEventListener('click', function () {
        newPet.play();
        repeatElements(newPet);
    });

    walk.addEventListener('click', function () {
        newPet.walk();
        repeatElements(newPet);
    });

    relax.addEventListener('click', function () {
        newPet.relax();
        repeatElements(newPet);
    });

    doctor.addEventListener('click', function () {
        newPet.doctor();
        repeatElements(newPet);
    });

    learnJs.addEventListener('click', function () {
        newPet.learnJs();
        repeatElements(newPet);
    });

    let timer = setInterval(function () {
        newPet.subtraction();
        repeatElements(newPet);
        if (newPet.health <= 0) {
            clearInterval(timer);
            let gameOver = document.createElement("span");
            gameOver.classList.add('gameOver');
            petSection.appendChild(gameOver);
            gameOver.innerText = 'GAME OVER, ' + newPet.name + ' is dead';
        }
    }, 3000);

    function createLi() {
        Object.keys(newPet).forEach(function (key) {
            let itemLi = document.createElement('li');
            let itemSpanValue = document.createElement('span');
            let itemSpanKey = document.createElement('span');
            itemLi.classList.add(key);
            itemLi.setAttribute('value', newPet[key]);
            itemSpanKey.innerText = key;
            itemSpanValue.innerText = newPet[key];
            itemSpanValue.setAttribute('data-value', newPet[key]);
            itemLi.appendChild(itemSpanKey);
            itemLi.appendChild(itemSpanValue);
            petList.appendChild(itemLi);
        });
    }

    function imgCaleidoscope(directory) {
        imageSection.removeChild(images);
        images.setAttribute('src', directory);
        imageSection.appendChild(images);
    }

    function createSmile(pet) {
        if (pet.health > 90) {
            imgCaleidoscope('img/3.png');
        }
        if (pet.health < 90 && pet.health > 75) {
            imgCaleidoscope('img/4.png');
        }
        if (pet.health < 75 && pet.health > 60) {
            imgCaleidoscope('img/2.png');
        }
        if (pet.health < 60 && pet.health > 45) {
            imgCaleidoscope('img/9.png');
        }
        if (pet.health < 45 && pet.health > 30) {
            imgCaleidoscope('img/7.png');
        }
        if (pet.health < 30 && pet.health > 15) {
            imgCaleidoscope('img/8.png');
        }
        if (pet.health < 15 && pet.health > 0) {
            imgCaleidoscope('img/6.png');
        }
        if (pet.health <= 0) {
            imgCaleidoscope('img/10.png');
        }
    }

    function deleteItems() {
        while (petList.firstElementChild) {
            petList.removeChild(petList.firstElementChild);
        }
    }

    function repeatElements(pet) {
        pet.defineMax();
        pet.defineMin();
        createSmile(pet);
        deleteItems();
        createLi();
    }


    function sectionDivBtn(btn, text) {
        let spanFeed = document.createElement('span');
        spanFeed.innerText = text;
        btn.appendChild(spanFeed);
        buttonsBlock.appendChild(btn);
    }
});
