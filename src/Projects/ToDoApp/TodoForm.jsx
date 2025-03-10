import { useState } from "react";

export const TodoForm = (props) => {
      const [inputValue, setInputValue] = useState("");

      const handleInputChange = (value) => {
        setInputValue(value);
    }

    const handleFormSubmit=(event)=>{
        event.preventDefault();
        props.addTodo(inputValue);
        setInputValue("");
    }
    return (
        <>
            <section className="form">
                <form onSubmit={handleFormSubmit}>
                    <div>
                        <input type="text"
                            className="todo-input"
                            placeholder="Enter"
                            autoComplete="off" value={inputValue}
                            onChange={(event) => handleInputChange(event.target.value)}
                        />
                    </div>
                    <div>
                        <button className="todo-btn" type="submit">Add ToDo</button>
                    </div>
                </form>
            </section>
        </>
    )
}