import { DisposableView } from '../types';

export class TodoView implements DisposableView {
    formWrapper: HTMLElement;

    constructor(form: string) {
        this.formWrapper = form;
    }

    createFormWrapper(element: string) {
        this.formWrapper = document.createElement(element);
        this.formWrapper.name = 'todo-form';
    }

    createToDoModel() {
        const form = document.querySelector('form');

        form.innerHTML = `
            <h1>Todo App</h1>
            <label><input type="text" name="task" placeholder="Type your task here" required></label>
            <label><input type="date" name="date" required></label>
            <button type="submit">Add task</button>
            <ul class="tasks-list" type="none"></ul>
        `;
    }

    addEventListeners() {
        const getFormData = document.querySelector('form');

        getFormData.addEventListener('submit', (event) => {
            event.preventDefault();
            this.addTask();
        })
    }

    addTask() {
        const tasksList = document.querySelector('.tasks-list');
        const liElement = document.createElement('li');

        liElement.innerHTML = `
            <li>TaskName
                <label><input type="checkbox" class="check-task"></label>
                <button type="button" class="delete">Delete</button>
            </li>
        `;

        tasksList.append(liElement);
        // это надо перенести в ToDoModel.ts
    }

    render(parentElement: HTMLElement): () => void {
        this.createFormWrapper('form');
        parentElement.append(this.formWrapper);

        this.createToDoModel();
        this.addEventListeners();

        return function () {
        };
    }

}
