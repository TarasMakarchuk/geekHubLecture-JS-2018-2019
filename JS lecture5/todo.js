// ##########################################################################

window.onload = function () {
    var elementLi;
    var searchAdd = document.querySelector("#add");
    searchAdd.addEventListener("click", function () {
        var searchText = document.getElementById("input-text");
        var inputTodoText = searchText.value;

        if (inputTodoText !== "") {
            addElementTodo();
        }

        function addElementTodo() {
            var resultList = document.getElementById("result-list");
            elementLi = document.createElement("li");
            resultList.appendChild(elementLi);
            elementLi.className = "element";

            var elementLabel = document.createElement("label");
            elementLi.appendChild(elementLabel);

            var checkboxElement = document.createElement("input");
            elementLabel.appendChild(checkboxElement);
            checkboxElement.setAttribute("type", "checkbox");
            checkboxElement.setAttribute("value", inputTodoText);
            checkboxElement.innerHTML = inputTodoText;

            var spanText = document.createElement("span");
            elementLabel.appendChild(spanText);
            spanText.innerHTML = inputTodoText + " " + addNowTime();
        }
        searchText.value = "";
    });

// ##########################################################################

    function addNowTime() {
        var date = new Date();
        date.setMonth(date.getMonth() + 1);
        return "(" +
            date.getFullYear() + "/" +
            date.getMonth() + "/" +
            date.getDate() + ", " +
            date.getHours() + ":" +
            date.getMinutes() + ":" +
            date.getSeconds() + ")";
    }

// ##########################################################################

    var del = document.getElementById("delete");
    del.addEventListener("click", deleteElement);

    function deleteElement() {
        var elementsCkecked = document.querySelectorAll(".element.checked");
        Array.prototype.forEach.call(elementsCkecked, function (del) {
            del.remove();
        });
    }

    var resultList = document.getElementById("result-list");
    resultList.addEventListener("click", checkBox);

    function checkBox(event) {
        let parentLabel = event.target.parentNode;
        parentLabel.parentNode.classList.toggle("checked");
    }

// ##########################################################################

    var reverseButton = document.getElementById("reverse");
    reverseButton.addEventListener("click", reverseElements);

    function reverseElements() {
        var resultListRev = document.getElementById("result-list");
        let liItems = resultListRev.childNodes;
        let nodes = Array.from(liItems).reverse();
        for (let i = 0; i < nodes.length; i++) {
            resultListRev.appendChild(nodes[i]);
        }
    }
};

// ##########################################################################