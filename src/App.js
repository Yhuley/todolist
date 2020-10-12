import React, { useState } from 'react';
import './App.css';
import ToDoCreate from "./components/ToDoCreate/ToDoCreate";
import ToDoList from "./components/ToDoList/ToDoList";

function App() {

    const [todoList, setTodoList] = useState([]);

    return (
        <div>
            <ToDoCreate {...{todoList, setTodoList}}/>
            <ToDoList {...{todoList, setTodoList}}/>
        </div>
    );
}

export default App;
