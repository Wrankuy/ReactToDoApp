import React, { useState } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const TodoList = ({ isDone, todos, deleteTodo, toggleChecked }) => {

  // const [isChecked, setIsChecked] = useState(false);

  const handleOnCheck = (name) => {
    // setIsChecked((prevState) => !prevState);
    // setIsChecked(!isChecked);
    toggleChecked(todos.find(todo => todo.name === name).name);
    console.log(todos);
  }

  return (
    <List>
      {todos.map((todo, index) => (
        <ListItem key={index.toString()} dense button>
          <Checkbox onClick={() => handleOnCheck(todo.name)} tabIndex={-1} disableRipple />
          <ListItemText primary={todo.name} />
          <ListItemSecondaryAction>
            <IconButton
              aria-label="Delete"
              onClick={() => {
                deleteTodo(index);
              }}
            >
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
}


export default TodoList;
