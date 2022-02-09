import styled from "styled-components";
import { AddTodo } from "./AddTodo";
import { FilterTodos } from "./FilterTodos";
const Header = styled.div`
border: 2px solid white;
  margin: 1em 2em;
    border-radius: 5px;
  padding: 1em;
  display:flex;
  flex:1;
`;

export const Form = ({status, setStatus, setInputText, todos, setTodos, inputText}) => {
    return (
    <Header>
    <AddTodo 
    todos={todos} 

    setTodos={setTodos} 
    inputText={inputText} 
    setInputText={setInputText}></AddTodo>
    <FilterTodos
        setStatus={setStatus}
        status={status}
    >

    </FilterTodos>
    </Header>
);
};
