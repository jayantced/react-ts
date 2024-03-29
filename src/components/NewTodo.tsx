import { useRef } from "react";
import React, {useContext} from 'react';
import classes from './NewTodo.module.css';
import { TodosContext } from "../store/todos-context";

const NewTodo: React.FC = () => {

    const todosCtx = useContext(TodosContext);

    const newTodoText = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const enteredText = newTodoText.current!.value;

        if (enteredText.trim().length === 0) {
            return;
        }

        todosCtx.addToDo(enteredText);
    }

    return <form onSubmit={submitHandler} className={classes.form}>
        <label htmlFor="text">Todo text</label>
        <input type="text" id="text" ref={newTodoText}/>
        <button>Add Todo</button>
    </form>
}

export default NewTodo;