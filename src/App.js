import React, { useState } from 'react';
import s from './App.module.css';
import ToDoCreate from "./components/ToDoCreate/ToDoCreate";
import ToDoList from "./components/ToDoList/ToDoList";

function App() {

    const [todoList, setTodoList] = useState([]);

    return (
        <div className={s.content}>
            <ToDoCreate {...{todoList, setTodoList}}/>
            <ToDoList {...{todoList, setTodoList}}/>
        </div>
    );
}

export default App;
