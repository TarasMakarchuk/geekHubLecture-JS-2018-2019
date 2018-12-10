/** Удосконалити ваш TodoList.
 Додати можливість редагування, видалення елементів списку, а також
 можливість відмічати пункти як виконані.
 Зміни зберігайте в LocalStorage, щоб після оновлення сторінки все
 завантажувалось в такому ж вигляді, як було до оновлення (вам знадобляться setItem і getItem методи).
 */
// ##########################################################################

window.onload = function () {
    var elementLi, elementLabel, checkboxElement,
        spanText, searchText, inputTodoText, liChildren, inputItem, inputChecked,
        inputParent, inputParentChildren, filtered, del, reverseButton;
    var searchAdd = document.querySelector("#add");
    var resultList = document.getElementById("result-list");
    var elementLiResultList = document.querySelectorAll("#result-list li");
    var todos;

    function getActualValues() {
        elementLiResultList = document.querySelectorAll("#result-list li");
        todos = [];
        [].forEach.call(elementLiResultList, function (li) {
            liChildren = li.children[0];
            inputItem = liChildren.querySelector('input');
            inputChecked = '';
            if (inputItem.getAttribute('checked')) {
                inputChecked = 'checked';
            }
            todos.push(
                {
                    input: inputChecked,
                    value: liChildren.querySelector('.span-todo').innerHTML,
                    date: liChildren.querySelector('.span-date').innerHTML
                });
        });
    }
// ##########################################################################

    function saveLocalStorage() {
        getActualValues();
        localStorage.setItem('todos', JSON.stringify(todos));
    }
// ##########################################################################

    function getLocalStorage() {
        todos = JSON.parse(localStorage.getItem('todos'));
        if (todos !== null && todos.length !== 0) {
            [].forEach.call(elementLiResultList, function (li) {
                li.remove();
            });
            for (let i = 0; i < todos.length; i++) {
                elementLi = document.createElement("li");
                resultList.appendChild(elementLi);

                elementLabel = document.createElement("label");
                elementLi.appendChild(elementLabel);

                checkboxElement = document.createElement("input");
                elementLabel.appendChild(checkboxElement);
                checkboxElement.setAttribute("type", "checkbox");
                checkboxElement.setAttribute("value", todos[i].value);

                if (todos[i].input) {
                    checkboxElement.setAttribute('checked', todos[i].input);
                }
                createSpan('span-todo');
                spanText.innerHTML = todos[i].value;
                createSpan('span-date');
                spanText.innerHTML = todos[i].date;
            }
        }
    }
// ##########################################################################

    searchAdd.addEventListener("click", function () {
        searchText = document.getElementById("input-text");
        inputTodoText = searchText.value;
        if (inputTodoText !== "") {
            addElementTodo();
        }
        searchText.value = "";
        saveLocalStorage();
    });

    function addElementTodo() {
        elementLi = document.createElement("li");
        resultList.appendChild(elementLi);
        elementLi.className = "element";

        elementLabel = document.createElement("label");
        elementLi.appendChild(elementLabel);

        checkboxElement = document.createElement("input");
        elementLabel.appendChild(checkboxElement);
        checkboxElement.setAttribute("type", "checkbox");
        checkboxElement.setAttribute("value", inputTodoText);
        checkboxElement.innerHTML = inputTodoText;

        createSpan('span-todo');
        spanText.innerHTML = inputTodoText;
        createSpan('span-date');
        spanText.innerHTML = addNowTime();
    }
// ##########################################################################

    function addNowTime() {
        let date = new Date();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        let monthDisplay = ((month < 10) ? "0" : "") + month;
        let dayDisplay = ((day < 10) ? "0" : "") + day;
        return " (" +
            date.getFullYear() + "/" +
            monthDisplay + "/" +
            dayDisplay + ", " +
            date.getHours() + ":" +
            date.getMinutes() + ":" +
            date.getSeconds() + ")";
    }
// ##########################################################################

    del = document.getElementById("delete");
    del.addEventListener("click", deleteElement);

    function deleteElement() {
        let elementsCkecked = document.querySelectorAll("input[checked='checked']");
        let liNodes = [];
        for (let i = 0; i < elementsCkecked.length; i++) {
            let labelNode = elementsCkecked[i].parentNode;
            let liNode = labelNode.parentNode;
            liNodes.push(liNode);
        }
        [].forEach.call(liNodes, function (del) {
            del.remove();
        });
        liNodes.length = 0;
        saveLocalStorage();
    }

    resultList.addEventListener("click", handleEvent);
// ##########################################################################

    function handleEvent(event) {
        // checkbox
        if (event.target.getAttribute('checked')
            && event.target.tagName === 'INPUT'
            && event.target.getAttribute('type') === 'checkbox') {
            event.target.removeAttribute('checked');
        } else if (event.target.tagName === 'INPUT'
            && event.target.getAttribute('type') === 'checkbox') {
            event.target.setAttribute('checked', 'checked');
        }

        // input edit
        inputParent = event.target.parentNode;
        inputParentChildren = inputParent.children;
        filtered = [].filter.call(inputParentChildren, function (input) {
            let tagName = input.tagName;
            return tagName === "INPUT" && !(tagName.attrName === 'type');
        });

        if (event.target.className === 'span-todo' && filtered.length === 1) {
            event.target.setAttribute("hidden", "");
            let newInput = document.createElement('input');
            inputParent.appendChild(newInput);
            let inputValue = inputParent.firstChild;
            let newValue = inputValue.getAttribute('value');
            newInput.innerText = newValue;
            newInput.value = newValue;

            newInput.addEventListener("keypress", enter);

            function enter(key) {
                if (key.key === "Enter") {
                    event.target.innerText = newInput.value;
                    newInput.remove();
                    event.target.removeAttribute("hidden");
                    saveLocalStorage();
                }
            }
        }
        saveLocalStorage();
    }
// ##########################################################################

    reverseButton = document.getElementById("reverse");
    reverseButton.addEventListener("click", reverseElements);

    function reverseElements() {
        let liItems = resultList.childNodes;
        let nodes = Array.from(liItems).reverse();
        for (let i = 0; i < nodes.length; i++) {
            resultList.appendChild(nodes[i]);
        }
        saveLocalStorage();
    }

    function createSpan(className) {
        spanText = document.createElement('span');
        elementLabel.appendChild(spanText);
        spanText.classList.add(className);
    }

    getLocalStorage();
};
// ##########################################################################