import {Todo} from './todo';

    export class App {
      heading = "List of Todos";
      todos: Todo[] = [];
      todoDescription = '';

      constructor() {
        this.todos = this.getToDosFromStorage();

        this.todoDescription = '';
      }

      getToDosFromStorage() {
        let todos;
        if(localStorage.getItem('todos') ===  null) {
          todos = [];
        } else {
          todos = JSON.parse(localStorage.getItem('todos'));
        }

        return todos;
      }


      addTodo() {
        if (this.todoDescription) {
          this.todos.push(new Todo(this.todoDescription));
          // store in local storage
          this.storeTodos(this.todoDescription);
          // clear field
          this.todoDescription = '';
        }
      }

      storeTodos(todo) {
        let todos;
        if(localStorage.getItem('todos') === null) {
          todos = [];
        } else {
          todos = JSON.parse(localStorage.getItem('todos'));
        }
      }

      removeTodo(todo) {
        let index = this.todos.indexOf(todo);
        if (index !== -1) {
          this.todos.splice(index, 1);
        }
        this.removeToDosFromStorage(index);
      }

      removeToDosFromStorage(index) {
        let todos = JSON.parse(localStorage.getItem('todos'));

        todos.splice(index, 1);

        localStorage.setItem('todos', JSON.stringify(todos));
      }
    }