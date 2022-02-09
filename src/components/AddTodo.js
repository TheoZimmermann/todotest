import { useState } from 'react';

import styled from "styled-components";

const FormContainer = styled.div`
display:flex;
flex:1;
width:66%;
background: transparent;

`;


const Input = styled.input`
border: 1px solid white;
    border-radius: 5px;
  padding: 0.5em 0.675em;
  width:80%;
`;

const Button = styled.button`
background: #ea580c;
color: white;
    border-radius: 5px;
  padding: 0.5em 0.675em;
  border: 0;
  margin-left: -1em;
  font-weight: bold;
  width:20%;
  text-transform: uppercase;
  cursor:pointer;

  &:hover {
    background: #9a3412;
  }
`;


export function AddTodo({setInputText, inputText, todos, setTodos}) {

  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
};

const submitTodoHandler = (e) => {
  e.preventDefault();
  setTodos([...todos, {text: inputText, completed: false, id: Math.random() * 1000}])
  setInputText('');
}

    return (
        <FormContainer>
          <form>
            <Input
            onChange={inputTextHandler}
            value={inputText}
            placeholder="ajouter une tâche" 
            />
            <Button type="submit" onClick={submitTodoHandler}>  ajouter </Button>
            </form>
        </FormContainer>
    );
}

