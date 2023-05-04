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
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        placeholder="Add Todo..."
        value={title}
        onChange={handleChange}
        className="input-text"
      />
      <button className="input-submit">Submit</button>
    </form>
  )
}

export default InputTodo;
