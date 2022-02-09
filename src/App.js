import logo from './logo.svg';
import  { TodosList } from './components/TodosList.js';
import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import styled from "styled-components";
import { Form } from './components/Form';

const Background = styled.div`
  font-size: 1em;
  margin: 2em;
  padding: 0.5em;
  border-radius: 3px;
  font-family: "Helvetica", sans-serif;
  min-height: 10em;
  background-color: rgba(255, 255, 255, 0.9);
  @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    background-color: rgba(255, 255, 255, 0.4);
  }
`;

const MainTitle = styled.h1`
text-align:center;
color: white;
text-transform: uppercase;
margin-bottom: 40px;
`


function App() {

  const [inputText, setInputText] = useState(''); 
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('All');
  const [filteredTodos, setFilteredTodos] = useState([]);

  //run once at start
  useEffect(() => {
    getLocalTodos();
  }, [])

  //run every time
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
    }, [todos, status]);

const filterHandler = () => {
  switch(status) {
    case 'completed': 
      setFilteredTodos(todos.filter(todo => todo.completed === true));
      break;
    case 'uncompleted': 
      setFilteredTodos(todos.filter(todo => todo.completed === false));
      break;
    default:
      setFilteredTodos(todos);
      break;  
  }
}


const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
}

const getLocalTodos = () => {
  if(localStorage.getItem('todos') === null) {
    localStorage.setItem("todos", JSON.stringify([]));
  } else {
    let todoLocal = JSON.parse(localStorage.getItem("todos"));
    setTodos(todoLocal);
  }
}
  return (
    <Background>
      <MainTitle> My TOUDOUX list </MainTitle>
      <Form
      filteredTodos={filteredTodos}
      setFilteredTodos={setFilteredTodos}
      todos={todos}
      setTodos={setTodos}
      inputText={inputText}
      setInputText={setInputText}
      setStatus={setStatus}
      status={status}/>
      <TodosList 
      todos={todos}
      filteredTodos={filteredTodos}
      setTodos={setTodos} ></TodosList>
    </Background>
  );
}

export default App;
