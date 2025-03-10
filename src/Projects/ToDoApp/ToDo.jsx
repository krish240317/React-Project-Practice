import { useState } from 'react'
import './ToDo.css'
import { TodoForm } from './TodoForm';
import { TodoDateTime } from './TodoDateTime';
import {TodoLoop} from './ToDoLoop'

export const ToDo = () => {
    const [task, setTask] = useState([]);

    const handleFormSubmit = (inputValue) => {
        if (!inputValue) return;
        if (task.includes(inputValue)) {
            return;
        }
        setTask((prev) => [...prev, inputValue]);
    }

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
                    <TodoDateTime />
                </header>
                <TodoForm addTodo={handleFormSubmit} />
                <section className='myUnOrdList'>
                    <ul>
                        {
                            task.map((CurTask, index) => {
                                return (
                                    <TodoLoop key={index} CurTask={CurTask} handelDelete={handelDelete} />
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