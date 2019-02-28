import {createElement, EventEmitter} from './helpers';

class View extends EventEmitter {
    constructor() {
        super();

        this.form = document.getElementById('todo-form');
        this.input = document.getElementById('add-input');
        this.list = document.getElementById('todo-list');
        this.todoInput = document.getElementById('todo-input');
        this.reverse = document.getElementById('reverse-button');

        this.form.addEventListener('submit', this.handleAdd.bind(this));
        this.reverse.addEventListener('click', this.handleReverse.bind(this));
    }

    createListItem(todo) {
        this.todoInput.appendChild(this.form);
        const checkbox = createElement('input', { type: 'checkbox', className: 'checkbox', checked: todo.completed ? 'checked' : '' });
        const label = createElement('label', { className: 'title' }, todo.title);
        const time = createElement('span', {className: 'time'}, todo.time);
        const editInput = createElement('input', { type: 'text', className: 'textfield' });
        const editButton = createElement('button', { className: 'edit' }, 'Edit');
        const deleteButton = createElement('button', { className: 'delete' }, 'Delete');
        const item = createElement('li', { className: `todo-item${todo.completed ? ' completed': ''}`,
                'data-id': todo.id, 'draggable': true},
            checkbox,
            label,
            time,
            editInput,
            editButton,
            deleteButton);
        return this.addEventListeners(item);
    }

    addNowTime() {
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

    addEventListeners(item) {
        const checkbox = item.querySelector('.checkbox');
        const editButton = item.querySelector('button.edit');
        const deleteButton = item.querySelector('button.delete');

        checkbox.addEventListener('change', this.handleToggle.bind(this));
        editButton.addEventListener('click', this.handleEdit.bind(this));
        deleteButton.addEventListener('click', this.handleDelete.bind(this));

        console.log(item);
        console.log("ITEM ADDED: ");
        if(item !== void 0) {
            item.addEventListener('dragstart', this.dragStart.bind(this));
            item.addEventListener('dragenter', this.dragEnter.bind(this));
            item.addEventListener('dragover', this.dragOver.bind(this));
            item.addEventListener('dragleave', this.dragLeave.bind(this));
            item.addEventListener('dragend', this.dragEnd.bind(this));
            item.addEventListener('drop', this.dragDrop.bind(this));
        }
        return item;
    }

    addDragAndDropEventListeners(item) {
        item.addEventListener('dragstart', this.dragStart);
        item.addEventListener('dragenter', this.dragEnter);
        item.addEventListener('dragover', this.dragOver);
        item.addEventListener('dragleave', this.dragLeave);
        item.addEventListener('dragend', this.dragEnd);
        item.addEventListener('drop', this.dragDrop);
    }


    findListItem(id) {
        return this.list.querySelector(`[data-id="${id}"]`);
    }

    handleAdd(event) {
        event.preventDefault();

        const errorText = document.getElementsByClassName('error')[0];
        if (this.input.value === '') {
            errorText.innerText = 'You must enter a task';
        }
        else {
            errorText.textContent = '';
            this.emit('add', this.input.value);
        }
    }

    handleReverse(event) {
        event.preventDefault();
        const listDefault = [...this.list.childNodes];
        listDefault.forEach(value => value.remove());

        this.emit('reverse');
    }

    handleToggle({ target }) {
        const listItem = target.parentNode;
        const id = listItem.getAttribute('data-id');
        const completed = target.checked;

        this.emit('toggle', { id, completed });
    }

    handleEdit({ target }) {
        const listItem = target.parentNode;
        const id = listItem.getAttribute('data-id');
        const label = listItem.querySelector('.title');
        const input = listItem.querySelector('.textfield');
        const editButton = listItem.querySelector('button.edit');
        // const time = listItem.querySelector('.time');
        // const completed = listItem.querySelector('.completed');

        const title = input.value;
        const isEditable = listItem.classList.contains('editable');

        if (isEditable) {
            this.emit('edit', { id, title });
            // this.emit('edit', { id, title, completed, time });
        } else {
            input.value = label.textContent;
            editButton.textContent = 'Save';
            listItem.classList.add('editable');
        }
    }

    handleDelete({ target }) {
        const listItem = target.parentNode;

        this.emit('delete', listItem.getAttribute('data-id'));
    }

    show(todos) {
        todos.forEach(todo => {
            const listItem = this.createListItem(todo);

            this.list.appendChild(listItem);
        });
    }

    addItem(todo) {
        const listItem = this.createListItem(todo);

        this.input.value = '';
        this.list.appendChild(listItem);
    }

    toggleItem(todo) {
        const listItem = this.findListItem(todo.id);
        const checkbox = listItem.querySelector('.checkbox');
        checkbox.checked = todo.completed;
        todo.completed ? listItem.classList.add('completed') : listItem.classList.remove('completed');
    }

    editItem(todo) {
        const listItem = this.findListItem(todo.id);
        const label = listItem.querySelector('.title');
        // const input = listItem.querySelector('.textfield');
        const editButton = listItem.querySelector('button.edit');

        label.textContent = todo.title;
        editButton.textContent = 'Edit';
        listItem.classList.remove('editable');
    }

    removeItem(id) {
        const listItem = this.findListItem(id);
        this.list.removeChild(listItem);
    }

    dragStart(e) {
        console.log(e);
        console.log('Drag Start');
        e.target.classList.add('draggable');
        e.dataTransfer.setData('text/html', this.textContent);
        startElement = e.target;
        // console.log(e.dataTransfer);
        // startElement = this;
        this.emit('dragstart');
    }

    dragEnter(e) {
        if (e.target.tagName === "LI") {
            e.target.classList.add('under-drag');
        }
        this.emit('dragenter');
    }

    dragOver(e) {
        if (e.preventDefault) {
            e.preventDefault();
        }
        e.dataTransfer.dropEffect = 'move';
        this.emit('dragover');
    }

    dragLeave(e) {
        e.target.classList.remove('under-drag');
        this.emit('dragleave');
    }

    dragEnd(e) {
        e.target.classList.remove('draggable');
        this.emit('dragend');
    }

    dragDrop(e) {
        endElement = e.target;
        if (endElement.tagName === "LI") {
            console.log('before Start');
            startElementId = startElement.getAttribute('data-id');
            endElementId = endElement.getAttribute('data-id');

            const startCompleted = startElement.getAttribute('class');
            const startId = startElement.getAttribute('data-id');
            const startTitle = startElement.querySelector('.title');
            const startTime = startElement.querySelector('.time');
            const startCheckbox = startElement.querySelector(".checkbox");

            const endCompleted = endElement.getAttribute('class');
            const endId = endElement.getAttribute('data-id');
            const endTitle = endElement.querySelector('.title');
            const endTime = endElement.querySelector('.time');
            const endCheckbox = endElement.querySelector(".checkbox");

            const startTitleText = startTitle.textContent;
            const endTitleText = endTitle.textContent;
            const startTimeText = startTime.textContent;
            const endTimeText = endTime.textContent;

            startElement.setAttribute('data-id', endId);
            // if (endCompleted.includes('completed')) {
            //     startElement.classList.add('completed');
            //     endElement.classList.remove('completed');
            //     this.emit('toggle', { endId, checkbox: startCheckbox.checked });
            // }
            startTitle.textContent = endTitleText;
            startTime.textContent = endTimeText;

            endElement.setAttribute('data-id', startId);
            // if (startCompleted.includes('completed')) {
            //     endElement.classList.add('completed');
            //     startElement.classList.remove('completed');
            //     this.emit('toggle', { startId, checkbox: endCheckbox.checked });
            // }
            endTitle.textContent = startTitleText;
            endTime.textContent = startTimeText;
        }

        endElement.classList.remove('under-drag'); //todo check if under-drag
        if (e.stopPropagation) {
            e.stopPropagation();
        }
        this.emit('drop');
    }
}

export let startElement, endElement, startElementId, endElementId, itemsCopy;

export default View;