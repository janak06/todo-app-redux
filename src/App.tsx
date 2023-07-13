// App.tsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, toggleTodo } from './Actions/todoActions';
import { TodoState } from './Reducers/todoReducer';
import { List, ListItem, ListItemText, Button, TextField, Container } from '@mui/material';

const App: React.FC = () => {
  const [input, setInput] = useState('');
  const todos = useSelector((state: TodoState) => state?.todos) || [];
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (input.trim() !== '') {
      dispatch(addTodo(input));
      setInput('');
    }else{
      alert('Please enter some value');
    }
  };

  const handleDeleteTodo = (index: number) => {
    dispatch(deleteTodo(index));
  };

  const handleToggleTodo = (index: number) => {
    dispatch(toggleTodo(index));
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleAddTodo();
    }
  };

  return (
    <Container maxWidth="sm">
      <h1>Todo App</h1>
      <div style={{ display : 'flex' }}>
      <TextField
        label="Enter Todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyPress}
        style={{ marginRight : 15, flex : 1 }}
      />
      <Button variant="contained" onClick={handleAddTodo}>
        Add Todo
      </Button>
      </div>
      <List>
        {todos.length ? todos.map((todo, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={todo.text}
              style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            />
            {!todo.completed ? (
              <Button onClick={() => handleToggleTodo(index)}>completed</Button>
            ) : (
              <Button onClick={() => handleToggleTodo(index)}>UnCompleted</Button>
            )}
            <Button onClick={() => handleDeleteTodo(index)}>Delete</Button>
          </ListItem>
        )) : null}
      </List>
    </Container>
  );
};

export default App;
