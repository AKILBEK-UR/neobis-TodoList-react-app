import React, {useState} from "react";
import TodoForm from "./TodoForm";
import "./main.css";
import TodoCreate from "./TodoCreate";


export default function TodoItem(){
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [category, setCategory] = useState("business"); 

    function addTodo(){
        const newTodo = [...todos,
            {
              id: Date.now().toString,
              todo: inputValue,
              category,
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

    function completeTodo(id) {
        const index = todos.findIndex((index) => index.id === id);
        const newTasks = [...todos];
        newTasks[index].done = !newTasks[index].done;
    }

    function editTodo(id, text) {
        const index = todos.findIndex((index) => index.id === id);
        const newTasks = [...todos];
        newTasks[index].todo = text;
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
                category = {category}
                setCategory = {setCategory}
            />
            </div>

            <TodoCreate 
                todos={todos}
                setInputValue={setInputValue}
                deleteTodo={deleteTodo}
                completeTodo = {completeTodo}
                editTodo = {editTodo}
            />

        </div>
    );
}