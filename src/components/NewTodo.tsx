import { useRef } from "react";

const NewTodo = () => {

    const newTodoText = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const currentText = newTodoText.current!.value
    }

    return <form onSubmit={submitHandler}>
        <label htmlFor="text">Todo text</label>
        <input type="text" id="text" ref={newTodoText}/>
        <button>Add Todo</button>
    </form>
}

export default NewTodo;