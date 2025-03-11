import { useState } from "react";

export const TodoForm = (props) => {
      const [inputValue, setInputValue] = useState({});

      const handleInputChange = (value) => {
        setInputValue({id:value,content:value,check:false});
    }

    const handleFormSubmit=(event)=>{
        event.preventDefault();
        props.addTodo(inputValue);
        setInputValue({id:"",content:"",check:false});
    }
    return (
        <>
            <section className="form">
                <form onSubmit={handleFormSubmit}>
                    <div>
                        <input type="text"
                            className="todo-input"
                            placeholder="Enter"
                            autoComplete="off" value={inputValue.content}
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