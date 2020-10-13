import React from "react";
import './ToDoList.module.css'

const ToDoList = (props) => {

    const deleteHandler = (id) => {
        const filteredTodos = props.todoList.filter(todo => todo.id !== id);
        props.setTodoList(filteredTodos);
    }

    const todoList = props.todoList.map(
        todo =>
            <div key={todo.id}>
                <li>{todo.title}</li>
                <button onClick={() => deleteHandler(todo.id)}>delete</button>
            </div>
    );
    
    return (
        <ul>
            {todoList}
        </ul>
    );
}

export default ToDoList;