import React, {useState} from "react"
import s from './ToDoCreate.module.css'

const ToDoCreate = (props) => {

    const [title, setTitle] = useState('')

    const titleHandler = (event) => {
        setTitle(event.target.value)
    }

    const formHandler = (event) => {
        event.preventDefault()
        const todo = {
            id: Date.now(),
            title: title,
        }
        if (title.trim().length >= 1) {
            props.setTodoList([...props.todoList, todo])
        }
        setTitle('')
    }

    return (
        <form className={s.todoForm} onSubmit={formHandler}>
            <input className={s.todoInput} type="text" placeholder="Enter smth..." onChange={titleHandler} value={title} />
            <button className={s.todoSubmit} type="submit">Submit</button>
        </form>
    )
}

export default ToDoCreate