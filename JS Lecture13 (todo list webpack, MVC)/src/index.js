import Model from './model';
import View from './view';
import Controller from './controller';
import { save, load } from './helpers';

const state = load();

const model = new Model(state || void 0);
model.on('change', state => save(state));

const view = new View();
new Controller(model, view);