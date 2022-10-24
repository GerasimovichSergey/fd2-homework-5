import './style.scss';
import { TodoView } from './todo';


const todoView = new TodoView('form');

const disposeTodoView = todoView.render(document.body);

// В консоли можно будет вызвать disposeTodoView() чтобы полностью удалить todoView со страницы
// @ts-ignore
globalThis['disposeTodoView'] = disposeTodoView;
