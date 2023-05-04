import InputTodo from "./InputTodo"
import TodosList from "./TodoList"
import { useState, useEffect } from 'react';

function getInitialTodos() {
  // getting stored items
  const temp = localStorage.getItem('todos');
  const savedTodos = JSON.parse(temp);
  return savedTodos || [];
}

const TodosLogic = () => {
  const [todos, setTodos] = useState(getInitialTodos());



  useEffect(() => {
    // storing todos items
    const temp = JSON.stringify(todos);
    localStorage.setItem('todos', temp);
  }, [todos]);

  return (
    <div>
      <InputTodo setTodos={setTodos} />
      <TodosList
      todosProps={todos}
      setTodos={setTodos} />
    </div>
  );
}

export default TodosLogic;
