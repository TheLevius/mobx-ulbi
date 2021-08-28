import {makeAutoObservable, observable} from 'mobx';

class Todo {
    todos = [
        {id: 1, title: 'выучить ORM & ODM', completed: false},
        {id: 2, title: 'выучить golang', completed: false},
        {id: 3, title: 'выучить english', completed: false}
    ]
    constructor() {
        makeAutoObservable(this)
    }
    addTodo(todo) {
        this.todos.push(todo)
    }
    removeTodo(id) {
        this.todos = this.todos.filter(el => el.id !== id)
    }
    changeStatusTodo(id) {
        this.todos.some(el => {
            if (el.id === id) {
                el.completed = !el.completed
                return true
            }

        })

    }
    fetchTodos() {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => {
                console.log(json)
                this.todos.push(...json)
            })
    }
}

export default new Todo();