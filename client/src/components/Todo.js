import React, {useReducer, useRef} from 'react';
import {reducer, initialState} from '../reducers/reducer';
import styled from 'styled-components';

const TodoInput = styled.input`
    border: 0;
    border-bottom: 2px solid white;
    width: 50%;
    font-size: 30px;
    line-height: 35px;
    height: 70px;
    text-align: center;
    padding: 10px;
    background: transparent;
    color: white;
`

const TodoContainer = styled.div`
  position: fixed;
  bottom: 10px;
  right: 10px;
  height: 300px;
  width: 400px;
`

const TodoCard = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-content: center;
background: inherit;
border-radius: 5px;
max-width: 100%;
height: 100%;
position: relative;
overflow: scroll;
overflow-x: hidden;


    &:before {
        content: "";
        background: inherit; 
        position: absolute;
        left: -25px;
        right: -25px;
        top: -25px; 
        bottom: -25px;
        box-shadow: inset 0 0 0 3000px rgba(255,255,255,0.3);
        filter: blur(10px);
        }

    &:-webkit-scrollbar {
        width: 6px;
        background-color: #F5F5F5;
        }
 
`

const TodoDepth = styled.div`
    position: absolute;
    text-align: center;
    height: 100%;
    width: 400px;
 `
 
 const TodoButton = styled.button`
    display: inline-block;
    border-radius: 3px;
    padding: 0.5rem 0;
    margin: 0.5rem 1rem;
    width: 11rem;
    background: transparent;
    color: white;
    border: 2px solid white;
`

const TodoUl = styled.ul`
    display: flex;
    justify-content: center;
    width: 100%;
`

 const TodoItems = styled.li`
    color: white;
    list-style-type: none;
    width: 100%;
    margin: 0 auto;
`
 
const Todo = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const inputRef = useRef();

    const handleSubmit = e => {
        e.preventDefault()
        dispatch({type: 'ADD', name: inputRef.current.value});
        inputRef.current.value = '';
    };

    return (
        <TodoContainer>
            <TodoCard>
            <TodoDepth>
            <form onSubmit={handleSubmit}>
                <TodoInput type='text' name='todo' ref={inputRef} placeholder='...todo'/>
                <TodoButton>Add Todo</TodoButton>
            </form>
            <TodoUl>
                {state.length !== 0
                 ? state.map((todo, index) => (
                     <TodoItems
                        className={
                            todo.completed === true ? 'todo_item_complete' : 'todo_item'
                        }
                        key={index}
                        onClick={() => dispatch({type: 'TOGGLE', id: todo.id})}
                        >
                            {todo.item}
                     </TodoItems>
                 ))
                : null}
            </TodoUl>
            <TodoButton onClick={() => dispatch({type: 'CLEAR'})}>Clear</TodoButton>
            </TodoDepth>
            </TodoCard>
        </TodoContainer>
    );
}

export default Todo;