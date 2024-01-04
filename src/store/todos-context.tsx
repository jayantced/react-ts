import React, { useState } from "react";
import Todo from "../models/todo";

type ToDosContextObj = {
    items: Todo[];
    addToDo: (text: string) => void;
    removeToDo: (id: string) => void;
}

export const TodosContext = React.createContext<ToDosContextObj>({
    items: [],
    addToDo: () => {},
    removeToDo: (id: string) => {}
})

const ToDosContextProvider: React.FC = (props) => {

    const [todos, setTodos] = useState<Todo[]>([]);

    function onAddHandler(text: string) {
  
      const newTodo = new Todo(text);
  
      setTodos((prevTodos) => {
        return prevTodos.concat(newTodo);
      });
  
    }
    
    function removeToDoHandler(toDoId: string) {
      setTodos((prevTodos) => {
        return prevTodos.filter(prevTodo => prevTodo.id !== toDoId)
      })
    }

    const contextValue: ToDosContextObj = {
        items: todos,
        addToDo: onAddHandler,
        removeToDo: removeToDoHandler
    }
    return (
        <TodosContext.Provider value={contextValue}>
            {props.children}
        </TodosContext.Provider>
    )
}

export default ToDosContextProvider;