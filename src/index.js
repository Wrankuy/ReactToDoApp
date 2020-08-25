import React from 'react';
import ReactDOM from 'react-dom';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import useTodoState from './useTodoState';
import './styles.css';

const App = () => {
  const { todos, addTodo, deleteTodo } = useTodoState([]);

  console.log(todos);

  return (
    <div>
        <div className="App">
            <h1>
              TO-DO LIST
            </h1>
            <TodoForm
              saveTodo={(todoText) => {
                const trimmedText = todoText.trim();

                if (trimmedText.length > 0) {
                  addTodo(trimmedText);
                }
              }
            }
            />
            <TodoList todos={todos} deleteTodo={deleteTodo} />
        </div>
        <div className="App">
            <h1>
            DONE LIST
            </h1>
        </div>
    </div>
  );

};
const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
