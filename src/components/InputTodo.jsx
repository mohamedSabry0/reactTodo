import { useState } from 'react';
const InputTodo = ({setTodos}) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos(prevState => {
      return [...prevState, {
        id: prevState.length + 1,
        title: title,
        completed: false
      }]
    })
    setTitle('');
  };
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add Todo..."
        value={title}
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  )
}

export default InputTodo;
