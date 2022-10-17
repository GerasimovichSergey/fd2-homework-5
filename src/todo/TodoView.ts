import { DisposableView } from '../types';


export class TodoView implements DisposableView {
    baseUI: string;

    constructor() {
        this.baseUI = `
         <form name="todo-form">
            <h1>Todo App</h1>
            <label><input type="text" name="task" placeholder="Type your task here"></label>
            <label><input type="date" name="date"></label>
            <button type="submit">Add task</button>
            <ul class="tasks-list" type="none">
                <li>TaskName
                    <label><input type="checkbox" class="check-task"></label>
                    <button class="delete">Delete</button>
                </li>
                <li>TaskName
                    <label><input type="checkbox" class="check-task"></label>
                    <button class="delete">Delete</button>
                </li>
                <li>TaskName
                    <label><input type="checkbox" class="check-task"></label>
                    <button class="delete">Delete</button>
                </li>
            </ul>
        </form>`;
    }

    render(parentElement: HTMLElement): () => void {
        parentElement.append(this.baseUI);

        return function () {
        };
    }

}
