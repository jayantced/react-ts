import React, {useContext} from 'react'
import TodoItem from './TodoItem';
import classes from './Todos.module.css';
import { TodosContext } from '../store/todos-context';

const Todos: React.FC = () => {

  const todosCtx = useContext(TodosContext);

  return (
    <ul className={classes.todo}>
      {todosCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          onRemoveToDo={todosCtx.removeToDo.bind(null, item.id)}
          text={item.text}
        />
      ))}
    </ul>
  );
}

export default Todos