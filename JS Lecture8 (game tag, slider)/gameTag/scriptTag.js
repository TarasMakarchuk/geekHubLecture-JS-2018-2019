window.onload = function () {
    let arrNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, ''];
    var createDiv = document.createElement('div');
    document.body.appendChild(createDiv);
    addBlockTableUlLi();
    var arrShuffled = [];
    var startElement, startElementInnerText, change;

    createDiv.classList.add('main-block');
    var mainBlockLi = document.querySelectorAll('.main-block li');

    function addBlockTableUlLi() {
        for (let i = 0; i < 4; i++) {
            var createUl = document.createElement('ul');
            createDiv.appendChild(createUl);
            for (let i = 0; i < 4; i++) {
                var createLi = document.createElement('li');
                createUl.appendChild(createLi);
            }
        }
    }

    function shuffle() {
        function compareRandom() {
            return Math.random() - 0.5;
        }

        arrShuffled = arrNumbers.sort(compareRandom);
        return arrShuffled;
    }

    function addNumbers() {
        for (let i = 0; i < arrShuffled.length; i++) {
            mainBlockLi[i].innerText = arrShuffled[i];
        }
    }

    var startButton = document.getElementsByClassName('btn-new-game')[0];
    startButton.addEventListener('click', function () {
        shuffle();
        addNumbers();
        loadContent(mainBlockLi, arrShuffled);
    });


    loadContent(mainBlockLi, arrShuffled);
    function loadContent(mainBlockLi, arrShuffled) {
        for (let i = 0; i < mainBlockLi.length; i++) {
            mainBlockLi[i].setAttribute('draggable', false);
        }

        let emptyCell = getEmptyCell(arrShuffled);
        if (typeof mainBlockLi[emptyCell] !== 'undefined') {
            mainBlockLi[emptyCell].setAttribute('draggable', false);
        }

        if (typeof mainBlockLi[emptyCell - 4] !== 'undefined') {
            mainBlockLi[emptyCell - 4].setAttribute('draggable', true);
        }

        if (((emptyCell + 1) % 4 !== 0) && typeof mainBlockLi[emptyCell + 1] !== 'undefined') {
            mainBlockLi[emptyCell + 1].setAttribute('draggable', true);
        }

        if (typeof mainBlockLi[emptyCell + 4] !== 'undefined') {
            mainBlockLi[emptyCell + 4].setAttribute('draggable', true);
        }

        if (((emptyCell + 4) % 4 !== 0) && typeof mainBlockLi[emptyCell - 1] !== 'undefined') {
            mainBlockLi[emptyCell - 1].setAttribute('draggable', true);
        }

        if (typeof mainBlockLi[emptyCell] !== 'undefined') {
            addDraggableEvents(mainBlockLi[emptyCell - 1]);
            addDraggableEvents(mainBlockLi[emptyCell + 1]);
            addDraggableEvents(mainBlockLi[emptyCell - 4]);
            addDraggableEvents(mainBlockLi[emptyCell + 4]);
        }

        function addDraggableEvents(item) {
            if (typeof item !== 'undefined') {
                item.addEventListener('dragstart', dragStart);
                item.addEventListener('dragenter', dragEnter);
                item.addEventListener('dragover', dragOver);
                item.addEventListener('dragleave', dragLeave);
                item.addEventListener('drop', dragDrop);
            }
        }

        function dragStart(e) {
            this.classList.add('draggable');
            e.dataTransfer.setData('Text', e.target.innerHTML);
            startElement = this;
        }

        function dragEnter() {
            if (this.innerText === '') {
                this.classList.add('under-drag');
            }
        }

        function dragOver(e) {
            if (e.preventDefault) {
                e.preventDefault();
            }
            e.dataTransfer.dropEffect = 'move';
        }

        function dragLeave() {
            this.removeAttribute("class");
        }

        function dragDrop(e) {
            this.removeAttribute("class");
            if (e.stopPropagation) {
                e.stopPropagation();
            }

            startElementInnerText = startElement.innerHTML;
            startElement.innerHTML = this.innerHTML;
            startElement.removeAttribute("class");
            this.innerHTML = startElementInnerText;
            this.removeAttribute("class");

            Object.keys(mainBlockLi).forEach(key => {
                arrShuffled[key] = mainBlockLi[key].innerText;
            });
            act();
        }
    }

    document.addEventListener('keydown', (event) => {
        let empty;
        if (event.key === 'ArrowRight') {
            empty = getEmptyCell(arrShuffled);
            if ((empty + 4) % 4 !== 0) {
                replace(empty - 1, empty);
            }
        }

        if (event.key === 'ArrowLeft') {
            empty = getEmptyCell(arrShuffled);
            if ((empty + 1) % 4 !== 0) {
                replace(empty + 1, empty);
            }
        }

        if (event.key === 'ArrowUp') {
            empty = getEmptyCell(arrShuffled);
            if ((empty + 4) < mainBlockLi.length) {
                replace(empty + 4, empty);
            }
        }

        if (event.key === 'ArrowDown') {
            empty = getEmptyCell(arrShuffled);
            if ((empty - 4) >= 0) {
                replace(empty - 4, empty);
            }
        }
    });

    function replace(index, empty) {
        change = arrShuffled[index];
        arrShuffled[index] = '';
        arrShuffled[empty] = change;
        act();
    }

    function act() {
        deleteCellText(mainBlockLi);
        addNumbers();
        loadContent(mainBlockLi, arrShuffled);
    }

    function deleteCellText(list) {
        for (let i = 0; i < list.length; i++) {
            list[i].innerHTML = '';
        }
    }

    function getEmptyCell(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === '') {
                return i;
            }
        }
    }

    if(JSON.stringify(arrShuffled)===JSON.stringify(arrNumbers)){
    let selectorMainBlock = document.querySelector('.main-block');
        selectorMainBlock.setAttribute('disabled', 'disabled');
        let divIdBlock = document.getElementById('block');
        let spanBlock = document.createElement('span');
        divIdBlock.appendChild(spanBlock);
        spanBlock.innerText = 'CONGRATULATIONS!, YOU WON!';
    }
};