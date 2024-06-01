import React from "react";
import "./main.css";
import TodoList from "./TodoList";


export default function TodoCreate({ todos, setInputValue, deleteTodo, completeTodo, editTodo}){


    return (
        <ul id="todo-list" className="list">
        {todos
        // .filter((el) => el.category === category)
        .map((todos) => (
          <TodoList
            key={todos.id}
            todos={todos}  
            setInputValue={setInputValue}
            deleteTodo={deleteTodo}
            completeTodo ={completeTodo}
            editTodo = {editTodo}
          />
        ))}
    </ul>
    );
}