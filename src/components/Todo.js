import styled from "styled-components";

const StyledLi = styled.li`
&.strike {
  text-decoration: line-through;
  opacity: 0.5;
}
`

const DeleteButton = styled.button`
background: #ea580c;
color: white;
border-radius: 9999px;
  padding: 0.25em;
  border: 0;
  margin-right: 1em;
  font-weight: bold;
  cursor:pointer;
  width: 2em;
  height: 2em;
    margin-top: 0.4em;
  &:hover {
    background: #9a3412;
  }
`;

const CompleteButton = styled.button`
background: green;
color: white;
border-radius: 9999px;
  padding: 0.25em;
  border: 0;
  margin-right: 1em;
  font-weight: bold;
  cursor:pointer;
  width: 2em;
  height: 2em;
    margin-top: 0.4em;
  &:hover {
    background: darkgreen;
  }
`;

export const Todo = ({ todos, setTodos, text, todo }) => {
  const deleteHandler = () => {
    setTodos(todos.filter(el => el.id !== todo.id));
  };

  const completeHandler = () => {
     setTodos(todos.map(item => {
         if(item.id === todo.id) {
             return {
                 ...item, completed: !item.completed
             };
         }
         return item;
     })
     );
  };

  return (

  <StyledLi className={`${todo.completed ? "strike" : ''}`}> 
        {text} 
        <CompleteButton onClick={completeHandler} > V </CompleteButton>
        <DeleteButton onClick={deleteHandler} > X </DeleteButton>
    </StyledLi>
  );
};