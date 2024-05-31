import React, {useState} from "react";
import "./main.css";
export default function TodoForm({addTodo,inputValue,setInputValue}){
  function handleSubmit(e) {
    e.preventDefault();

    console.log(inputValue);
    if (inputValue !== "") {
      addTodo();
    }
  }
  return (
    <div>
        <form onSubmit={handleSubmit}>
          <h2>CREATE A TODO</h2>
          <p className="sub-title">Whats on your todo list?</p>

          <label className="input__activity">
          <input
            className="input-box"
            type="text"
            placeholder="Enter activity..."
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
        </label>


        <button className="add-todo__btn" onClick={addTodo}>
          ADD TODO
        </button>
        </form>



    </div>
  )
}