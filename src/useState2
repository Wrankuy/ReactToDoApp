import { useState } from 'react';

export default initialValue => {
  const [todos, setTodos] = useState(initialValue);

  return {
    todos,
    addTodo: todoText => {
      setTodos([...todos, {
        name: todoText,
        isChecked: false
      }]);
      // setTodos([...todos, todoText]);
    },
    deleteTodo: todoIndex => {
      const newTodos = todos.filter((_, index) => index !== todoIndex);
      setTodos(newTodos);
    },
    toggleChecked: (name) => {
      let modifiedTodo = todos.find((todo) => todo.name == name);
      modifiedTodo.isChecked = !modifiedTodo.isChecked;
      setTodos(prevState => [...prevState, modifiedTodo]);
    }
  };
};
