import { useState } from 'react'
import './ToDo.css'
import { MdCheck, MdDeleteForever } from "react-icons/md";
export const ToDo = () => {
    const [inputValue, setInputValue] = useState("");
    const [task, setTask] = useState([]);
    const [dateTime, SetDateTime] = useState("");

    const handleInputChange = (value) => {
        setInputValue(value);
    }
    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (!inputValue) return;
        if (task.includes(inputValue)) {
            setInputValue("");
            return;
        }

        setTask((prev) => [...prev, inputValue]);

        setInputValue("");
    }


    setInterval(() => {
        const now = new Date();
        const formatedDate = now.toLocaleDateString();
        const formatedTime = now.toLocaleTimeString();

        SetDateTime(`${formatedDate} - ${formatedTime}`)
    }, 1000);

    const handelDelete = (value) => {

        const updateTask = task.filter((CurTask) => CurTask !== value);

        setTask(updateTask);
    }

    const handelClear = () => {
        setTask([]);
    }

    return (
        <>
            <section className="todo-container">
                <header>
                    <h1>ToDo List</h1>
                    <h2 className='date-time'>{dateTime}</h2>
                </header>
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

                <section className='myUnOrdList'>

                    <ul>
                        {
                            task.map((CurTask, index) => {

                                return (
                                    <li key={index} className='todo-item'>
                                        <span>{CurTask}</span>
                                        <button className='check-btn'> <MdCheck /> </button>
                                        <button className='delete-btn' onClick={() => handelDelete(CurTask)}> <MdDeleteForever /> </button>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </section>
                <section>
                    <button className='clear-btn' onClick={handelClear}>Clear All</button>
                </section>
            </section>
        </>
    )
}