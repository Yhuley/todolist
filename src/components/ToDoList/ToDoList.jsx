import React from "react"
import s from './ToDoList.module.css'

const ToDoList = (props) => {

    const deleteHandler = (id) => {
        const filteredTodos = props.todoList.filter(todo => todo.id !== id)
        props.setTodoList(filteredTodos)
    }

    const todoList = props.todoList.map(
        todo =>
            <div className={s.todosItem} key={todo.id}>
                <li className={s.todoTitle}>{todo.title}</li>
                <button className={s.todoDelete} onClick={() => deleteHandler(todo.id)}>delete</button>
            </div>
    )
    
    return (
        <ul className={s.todosList}>
            {todoList}
        </ul>
    )
}

export default ToDoList