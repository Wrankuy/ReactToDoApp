import React from 'react';
import ReactDOM from 'react-dom';
// import Typography from '@material-ui/core/Typography';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import useTodoState from './useTodoState';
import './styles.css';

const App = () => {

  const { todos, addTodo, deleteTodo, toggleChecked } = useTodoState([]);

  return (
    <div>
      <div className="App">
        <h1>Todos</h1>

        <TodoForm
          saveTodo={todoText => {
            const trimmedText = todoText.trim();

            if (trimmedText.length > 0) {
              addTodo(trimmedText);
            }
          }}
        />

        <TodoList isDone={true} todos={todos} deleteTodo={deleteTodo} toggleChecked={toggleChecked} />
      </div>
      <div className='App'>
        <h1>Done</h1>

      </div>
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
