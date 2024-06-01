import React, { useRef } from "react";

export default function TodoList({todos,setInputValue,deleteTodo, completeTodo, editTodo}){

    const inputRef = useRef();
    return (
        <li className={`${todos.done ? "completed" : ""} ${todos.category} `}> 
        
            <label className="checkbox">
                <input
                type="checkbox"
                onChange={() => completeTodo(todos.id)}
                checked={todos.done}
                />
            </label>
            <input
                className="input-text"
                value={todos.todo}
                ref={inputRef}
                onChange={(e) => editTodo(todos.id, e.target.value)}
            />
            <button className="edit-btn" onClick={() => inputRef.current.focus()}>
                Edit
            </button>
            <button className="delete-btn" onClick={() => deleteTodo(todos.id)}>
                Delete
            </button>
        </li>
    );
}