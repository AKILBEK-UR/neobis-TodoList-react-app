import React, {useState} from "react";
import TodoForm from "./TodoForm";
import "./main.css";
import TodoCreate from "./TodoCreate";


export default function TodoItem(){
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState("");

    function addTodo(){
        const newTodo = [...todos,
            {
              id: Date.now().toString,
              todo: inputValue,
              done: false,
              editable: false,
            },
          ];
        setTodos(newTodo);
        setInputValue("");
    }

    function deleteTodo(id){
        let newTodos = todos.filter((index) => {
            return index.id = !id;
        })
        setTodos(newTodos);
    }


    return (
        <div className="todo" >
            <div className="todo__container">
            <h1>Whats up,
            <input className="todo__input" type="text" placeholder="name here..."></input>
            </h1>

            <TodoForm 
                addTodo = {addTodo}
                inputValue = {inputValue}
                setInputValue = {setInputValue}
            />
            </div>

            <TodoCreate 
                todos={todos}
                setInputValue={setInputValue}
                deleteTodo={deleteTodo}
            />

        </div>
    );
}