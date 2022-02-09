import React from "react";

import styled from "styled-components";


const StyledForm = styled.form`
width: 33%;
height: 12px;
display:flex;
justify-content:center;



& .select {
    width:100%;
    padding: 0.5em 0.675em;
border: 0;
font-weight: bold;
}
`;

export const FilterTodos = ({setStatus}) => {

    const statusHandler = (e) => {
            setStatus(e.target.value);
    }
    
    return (
        <StyledForm>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                <option value="all"> All </option>
                <option value="completed"> Completed </option>
                <option value="uncompleted"> Uncompleted </option>
                </select>
            </div>
        </StyledForm>
    )
}