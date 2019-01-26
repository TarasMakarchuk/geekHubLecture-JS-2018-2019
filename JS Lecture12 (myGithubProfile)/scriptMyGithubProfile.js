/**
1. Зробити сторінку “My GitHub Profile” (додаткове завдання - розмістити її на github pages),
з короткими даними про вас (дані з гіта отримуємо з допомогою методу fetch -
у GitHub непоганий API, наприклад https://developer.github.com/v3/repos/branches/… -
приклад отримання списку бранчів).

2. Обов’язково там має бути розділ Мої репозиторії GitHub.

3. По кліку на репозиторій розкривається додаткова інформація про дату останнього коміта в master)
Не забуваємо під час ajax запитів інформувати користувача про те, що запит триває (з допомогою лоадера, наприклад.)
*/


let htmlContent = document.getElementsByClassName('content')[0];
let elementUl = document.createElement('ul');
elementUl.classList.add('ul-content');
htmlContent.appendChild(elementUl);
let listUl = htmlContent.querySelector('ul');
htmlContent.classList.add('img');
let elementDiv = document.getElementsByClassName('logo')[0];

fetch('https://api.github.com/users/TarasMakarchuk')
    .then(response => response.json())
    .then(data => {
        htmlContent.classList.remove('img');
        let avatar = document.createElement('img');
        avatar.setAttribute('class', 'avatar');
        let avatarLink = document.createElement('a');
        avatarLink.setAttribute('href', 'https://github.com/TarasMakarchuk/geekHubLecture-JS-2018-2019');
        avatarLink.appendChild(avatar);
        elementDiv.appendChild(avatarLink);
        avatar.setAttribute('src', data.avatar_url);
        avatar.setAttribute('alt', 'avatar');
        elementDiv.appendChild(avatar);

        let title = document.getElementsByClassName('title')[0];
        title.appendChild(elementDiv);
        let elementLi = document.createElement('li');
        elementLi.innerText = 'Hello! My name is ' + data.login.replace(/M/g, " M") + '.'
            + ' My profile has been created ' + data.created_at.slice(0, 10).replace(/-/g, "/") + '. ' +
            'For the time being, i am studying in the courses of the Geek Hub in Javascript.' +
            ' The goal of my studies is to become a junior developer, and also to share my knowledge with others.';
        listUl.appendChild(elementLi);

        let loaderElement = document.getElementsByClassName('loader')[0];
        loaderElement.setAttribute('style', 'display: block');
        fetch('https://api.github.com/users/TarasMakarchuk/repos')
            .then(response => response.json())
            .then(data => {
                loaderElement.setAttribute('style', 'display: none');
                let myRepositoriesArray = [];
                let myRepositoriesUpdated = [];

                for (let i = 0; i < data.length; i++) {
                    if (data[i].name) {
                        myRepositoriesArray.push(data[i].name);
                    }
                    if (data[i].updated_at) {
                        myRepositoriesUpdated.push(data[i].updated_at);
                    }
                }

                for (let i = 0; i < myRepositoriesArray.length; i++) {
                    let myRepositories = document.getElementsByClassName('my-repositories')[0];
                    let myRepositoriesLi = document.createElement('li');
                    myRepositories.appendChild(myRepositoriesLi);
                    myRepositoriesLi.innerText = i + 1 + ') ' + myRepositoriesArray[i];

                    let button = document.createElement('button');
                    button.innerText = 'more...';
                    myRepositoriesLi.appendChild(button);

                    let myRepositoriesUpdatedSpan = document.createElement('span');
                    myRepositoriesLi.appendChild(myRepositoriesUpdatedSpan);
                    myRepositoriesUpdatedSpan.innerText = 'latest commit: ' + myRepositoriesUpdated[i].slice(0, 10).replace(/-/g, "/");
                    myRepositoriesUpdatedSpan.setAttribute('style', 'display: none');

                    function moreButton(e) {
                        let parentLi = e.target.parentNode;
                        let spanElement = parentLi.querySelector('span');
                        spanElement.setAttribute('style', 'display: block');
                    }
                    button.addEventListener('click', moreButton);
                }
            }).catch(error => console.error(error));
    })
    .catch(error => console.error(error));
