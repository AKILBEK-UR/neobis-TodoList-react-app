import React, {useState,useEffect} from "react";
import TodoForm from "./TodoForm";
import "./main.css";
import TodoCreate from "./TodoCreate";


export default function TodoItem(){
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [category, setCategory] = useState("business");

    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
        setTodos(savedTodos);
      }, []);

    function addTodo(){
        const newTodos = [...todos,
            {
              id: Date.now(),
              todo: inputValue,
              category,
              done: false,
              editable: false,
            },
          ];
        setTodos(newTodos);
        localStorage.setItem("todos", JSON.stringify(newTodos));
        setInputValue("");
    }

    function deleteTodo(id){
        let newTodos = todos.filter((index) => {
            return index.id !== id;
        })
        setTodos(newTodos);
        localStorage.setItem("todos", JSON.stringify(newTodos));
    }

    function completeTodo(id) {
        const index = todos.findIndex((index) => index.id === id);
        const newTodos = [...todos];
        newTodos[index].done = !newTodos[index].done;
        setTodos(newTodos);
        localStorage.setItem("todos", JSON.stringify(newTodos));
    }

    function editTodo(id, text) {
        const index = todos.findIndex((index) => index.id === id);
        const newTodos = [...todos];
        newTodos[index].todo = text;
        setTodos(newTodos);
        localStorage.setItem("todos", JSON.stringify(newTodos));
    }

    return (
        <div className="todo" >
            <div className="todo__container">
            <h1>Whats up,<input className="todo__input" type="text" placeholder="name here..."></input>
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