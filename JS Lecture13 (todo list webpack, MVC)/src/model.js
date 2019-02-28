import { EventEmitter } from './helpers';
import itemsCopy, {endElementId, startElementId} from './view';

class Model extends EventEmitter {
    constructor(items = []) {
        super();

        this.items = items;
    }

    getItem(id) {
        return this.items.find(item => item.id == id);
    }

    addItem(item) {
        this.items.push(item);
        this.emit('change', this.items);
        return item;
    }

    updateItem(id, data) {
        const item = this.getItem(id);
        Object.keys(data).forEach(prop => item[prop] = data[prop]);
        this.emit('change', this.items);
        return item;
    }

    swapItems() {
        const item = localStorage.getItem('todos');

        let items = {};
        let itemsCopy = [];

        const dataJSON = JSON.parse(item);
        const arr = [...dataJSON];
        Object.values(arr).forEach((value) => {
            console.log('value.id:::: ' + value.id);
            if (startElementId == value.id || endElementId == value.id) {
                [items.id, items.title, items.completed, items.time] = [value.id, value.title, value.completed, value.time];
                itemsCopy.push(items);
                items = {};
            }
        });
        console.log('itemsCopy');
        console.log(itemsCopy);

        this.updateItem(startElementId, { title: itemsCopy[1].title, completed: itemsCopy[1].completed, time: itemsCopy[1].time });
        this.updateItem(endElementId, { title: itemsCopy[0].title, completed: itemsCopy[0].completed, time: itemsCopy[0].time });
        // this.updateItem(startElementId, { id: itemsCopy[1].id, title: itemsCopy[1].title, completed: itemsCopy[1].completed, time: itemsCopy[1].time });
        // this.updateItem(endElementId, { id: itemsCopy[0].id, title: itemsCopy[0].title, completed: itemsCopy[0].completed, time: itemsCopy[0].time });
        // this.updateItem(endElementId, itemsCopy[1]);

        // const start = this.getItem(startElementId);
        // const end = this.getItem(endElementId);
        // const { id, title, completed, time } = start;
        // const { id, title, completed, time } = start;
        // const { ...startOptions } = start;
        // const { ...endOptions } = end;

        // Object.keys(startOptions).forEach(prop => end[prop] = start[prop]);
        // Object.keys(endOptions).forEach(prop => start[prop] = end[prop]);
        // console.log("start");
        // console.log(start);
        // console.log(end);

        // const editStart =this.updateItem(startElementId, {id: end.id, title: end.title, completed: end.completed, time: end.time});
        // const editEnd =this.updateItem(endElementId, {id: start.id, title: start.title, completed: start.completed, time: start.time});
        // console.log('yes');
        // console.log(editStart);
        // console.log('yesEnd');
        // console.log(editEnd);


        this.emit('change', this.items);
        return this.items;
        // this.emit('change', this.items);
        // return item;
    }

    removeItem(id) {
        const index = this.items.findIndex(item => item.id == id);

        if (index > -1) {
            this.items.splice(index, 1);
            this.emit('change', this.items);
        }
    }

    reverseItems(items) {
        this.items = items;
        const reverseItems = items.reverse();
        Object.keys(reverseItems).forEach(prop => items[prop] = reverseItems[prop]);
        this.emit('change', items);
        return this.items;
    }

    dragAndDropItems() {
        const swapItems1 = this.swapItems();
        console.log('const swapItems1 = this.swapItems()');
        this.emit('change', swapItems1);

        // const start = this.getItem(startElementId);
        // const end = this.getItem(endElementId);
        // console.log('start');
        // console.log(start);
        // console.log('end');
        // console.log(end);
        // const editStart =this.updateItem(startElementId, {id: end.id, title: end.title, completed: end.completed, time: end.time});
        // const editEnd =this.updateItem(endElementId, {id: start.id, title: start.title, completed: start.completed, time: start.time});
        // console.log('yes');
        // console.log(editStart);
        // console.log('yesEnd');
        // console.log(editEnd);
        // this.items = items;
        // console.log('MODEL DROP++++');
        // // const reverseItems = items.reverse();
        // Object.keys(items).forEach(prop => items[prop] = itemsCopy[prop]);
        // this.emit('change', items);
        // return this.items;
    }
}

export default Model;