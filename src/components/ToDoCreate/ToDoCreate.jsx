import React, {useState} from "react";
import './ToDoCreate.module.css';

const ToDoCreate = (props) => {

    const [title, setTitle] = useState('');

    const titleHandler = (event) => {
        setTitle(event.target.value);
    };

    const formHandler = (event) => {
        event.preventDefault();
        let todo = {
            id: Date.now(),
            title: title,
        };
        if (title.trim() !== '') {
            props.setTodoList([...props.todoList, todo]);
        }
        setTitle('');
    };

    return (
        <form onSubmit={formHandler}>
            <input type="text" placeholder="Enter smth..." onChange={titleHandler} value={title}></input>
            <button type="submit">Submit</button>
        </form>
    );
}

export default ToDoCreate;