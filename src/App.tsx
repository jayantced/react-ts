import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";

const todos = [
  new Todo('Learn React'), new Todo('Learn Typescript')
]

function App() {
  return (
    <div>
      <NewTodo />
      <Todos items={todos} />
    </div>
  );
}

export default App;
