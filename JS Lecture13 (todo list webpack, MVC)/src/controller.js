import {endElementId, itemsCopy, startElementId, startElement, endElement } from "./view";

class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        view.on('add', this.addTodo.bind(this));
        view.on('toggle', this.toggleTodo.bind(this));
        view.on('edit', this.editTodo.bind(this));
        view.on('delete', this.removeTodo.bind(this));
        view.on('reverse', this.reverseTodo.bind(this));
        view.on('drop', model.dragAndDropItems.bind(model));

        this.dragAndDropTodo.bind(this);

        // view.on('dragAndDrop', this.dragAndDropTodo.bind(this));
        // this.dragAndDropTodo.bind(this);
        view.show(model.items);
    }

    addTodo(title) {
        const item = this.model.addItem({
            id: Date.now(),
            title,
            completed: false,
            time: this.view.addNowTime()
        });

        this.view.addItem(item);
    }


    toggleTodo({ id, completed }) {
        const item = this.model.updateItem(id, { completed });
        this.view.toggleItem(item);
    }

    editTodo({ id, title }) {
        const item = this.model.updateItem(id, { title });
        this.view.editItem(item);
    }

    removeTodo(id) {
        this.model.removeItem(id);
        this.view.removeItem(id);
    }

    reverseTodo() {
        const items = this.model.items;
        this.model.reverseItems(items);
        this.view.show(items);
    }

    dragAndDropTodo() {
        this.view.addDragAndDropEventListeners();
        console.log('endElement.completed');
        console.log(endElement.completed);
        console.log('startElement.completed');
        console.log(startElement.completed);
        this.toggleTodo({ startElementId, completed: endElement.completed });
        this.toggleTodo({ endElementId, completed: startElement.completed });
    }

        // dragAndDropTodo() {
        // const items = this.model.items;
        // this.model.dragAndDropItems(items);
        // this.view.show(items);

        // this.emit('change', items);


        // // { id: firstItemId, title: secondItemTitle, completed: secondItemCompleted, time: secondItemTime },
        // // { id: secondItemId, title: firstItemTitle, completed: firstItemCompleted, time: firstItemTime  }
        // console.log(startElementId);
        // console.log(endElementId);
        //
        // console.log(itemsCopy);
        // console.log('LOG START');
        //
        // console.log(itemsCopy);
        // console.log(itemsCopy[0].id);
        // console.log(itemsCopy[0].title);
        // console.log(itemsCopy[0].completed);
        // console.log(itemsCopy[0].time);
        // console.log('LOG');
        // console.log(itemsCopy[1].id);
        // console.log(itemsCopy[1].title);
        // console.log(itemsCopy[1].completed);
        // console.log(itemsCopy[1].time);
        // console.log('LOG END');
        //
        // // const itemFirst = this.model.updateItem(startElementId, { id: itemsCopy[1].id,  title: itemsCopy[1].title, completed: itemsCopy[1].completed, time: itemsCopy[1].time });
        // //
        // // const itemSecond = this.model.updateItem(endElementId, { id: itemsCopy[0].id,  title: itemsCopy[0].title, completed: itemsCopy[0].completed, time: itemsCopy[0].time });
        // //
        // // console.log('AGAIN');
        // // console.log(itemFirst);
        // // console.log(itemSecond);
        // // this.view.editItem(itemFirst);
        // // console.log('between');
        // // this.view.editItem(itemSecond);
        //
        //
        // console.log('itemsCopy[0].id');
        // console.log(itemsCopy[0].id);
        // console.log('itemsCopy[1].id');
        // console.log(itemsCopy[1].id);
        //
        //
        // this.view.swapItems(itemsCopy[0].id, itemsCopy[1].id);
        // // this.model.dragAndDropItems(firstItem, secondItem);
    // }
}

export default Controller;