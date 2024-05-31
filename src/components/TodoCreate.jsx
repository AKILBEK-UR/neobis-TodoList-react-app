import React, {useState} from "react";
import "./main.css";
import TodoList from "./TodoList";


export default function TodoCreate({ todos, setInputValue, deleteTodo}){


    return (
        <ul id="todo-list" className="list">
        {todos
        // .filter((el) => el.category === category)
        .map((task) => (
          <TodoList
            key={task.id}
            task={task}
            deleteTodo={deleteTodo}
            setInputValue={setInputValue}
          />
        ))}
    </ul>
    );
}