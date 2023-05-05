import TodoItem from "./TodoItem";
import styles from '@/styles/TodoList.module.css';

const TodosList = ({ todosProps, setTodos }) => {

  return (
    <ul className={styles.todolist}>
      {todosProps.map((todo) => (
        <TodoItem key={todo.id} itemProp={todo} setTodos={setTodos} />
      ))}
    </ul>
  );
};


export default TodosList;
