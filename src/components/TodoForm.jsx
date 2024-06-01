import React, {useState} from "react";
import "./main.css";

export default function TodoForm({addTodo,inputValue,setInputValue, category, setCategory}){
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

        <div className="todo__category">
          <p className="subtitle">Pick a category</p>
          <div className="radio-btn__wrapper">
            <label className="radio-btn">
              <input
                className="radio-category radio"
                type="radio"
                name="category"
                checked={category === "business"}
                onChange={(e) => setCategory("business")}
              />
              <span className="business radio"></span>
              <p>Business</p>
            </label>
            <label className="radio-btn">
              <input
                className="radio-category radio"
                type="radio"
                name="category"
                checked={category === "personal"}
                onChange={(e) => setCategory("personal")}
              />
              <span className="personal radio"></span>
              <p>Personal</p>
            </label>
          </div>
        </div>


        <button className="add-todo__btn" onClick={addTodo}>
          ADD TODO
        </button>
        </form>
    </div>
  )
}