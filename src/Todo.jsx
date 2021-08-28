import React from 'react';
import todo from './store/todo';
import {observer} from 'mobx-react-lite';
import './App.css';

export const Todo = observer (() => {

    const removeHandle = (id) => {
        todo.removeTodo(id)
    }

    const checkboxHandle = (id) => {
        todo.changeStatusTodo(id)
    }
    const fetchTodosHandle = () => {
        todo.fetchTodos()
    }
    console.log('todo is rendered')
    return (
        <div className={'todos'}>
            <button onClick={fetchTodosHandle}> Fetch todos</button>
            {todo.todos.map(el => (
                <div className={'todo'} key={el.id}>
                    <input type={'checkbox'} checked={el.completed} onChange={()=>checkboxHandle(el.id)}/>
                    {el.title}
                    <button onClick={()=>removeHandle(el.id)}>X</button>
                </div>
            ))}
        </div>
    )
})