import TodosLogic from "./TodosLogic";

const TodoApp = () => {
  return (
    <div>
      <h1>todos</h1>
      <p>Items will not persist yet</p>
      <TodosLogic />
    </div>
  );
};
export default TodoApp;
