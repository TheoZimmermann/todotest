import { Todo } from './Todo.js';
import React from 'react';
import styled from "styled-components";

const Header = styled.div`
border: 2px solid white;
  margin: 1em 2em;
    border-radius: 5px;
  padding: 1em;
  display:flex;
  flex:1;
`;

const List = styled.ul`
display:flex;
flex-direction: column;
list-style: none;
text-decoration:none;
`

export const TodosList = ({todos, filteredTodos, setTodos}) => {

    return (
        <div>
            <List>
            {filteredTodos.map((todo) => (
               <Todo 
               key={todo.id}
               todo={todo}
               todos={filteredTodos}
               setTodos={setTodos}
               completed={todo.completed}
               text={todo.text} />
            ))}
            </List>
        </div>
    );
};

