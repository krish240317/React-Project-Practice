import { useState } from 'react'
import './ToDo.css'
import { TodoForm } from './TodoForm';
import { TodoDateTime } from './TodoDateTime';
import { TodoLoop } from './ToDoLoop'
import { setLocalData, getLocalData } from './TodoLocalStorage'

export const ToDo = () => {
    const [task, setTask] = useState(() => getLocalData());

    const handleFormSubmit = (inputValue) => {
        const { id, content, check } = inputValue;
        if (!content) return;
        const isexsist = task.find((curTask) => curTask.content === content)
        if (isexsist) return;
        setTask((prev) => [...prev, { id, content, check }]);    //here as per new rule if key value is same in js obecjt then write it inly 1 time 
    }

    const handelDelete = (value) => {
        const updateTask = task.filter((CurTask) => CurTask.content !== value);
        setTask(updateTask);
    }

    const handelCheck = (content) => {
        const updatedTask = task.map((curTask) => {
            if (curTask.content === content) {
                return { ...curTask, check: !curTask.check };
            }
            else {
                return curTask;
            }
        });
        setTask(updatedTask);
    }

    setLocalData(task);
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
                            task.map((CurTask) => {
                                return (
                                    <TodoLoop key={CurTask.id} content={CurTask.content} handelDelete={handelDelete} check={CurTask.check} handelCheck={handelCheck} />
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