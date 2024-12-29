import React, { useState } from 'react'

export default function ToDoList() {

const [tasks, setTasks] = useState(["Eat", "shower", "walk"]);
const [newTask, setNewTask] = useState("");

function handleInputChange(event) {
    setNewTask(event.target.value);
}

function addTask() {
    
}

function deleteTask(index) {
    
}

function moveTaskUp(index) {
    
}

function moveTaskDown(index) {
    
}

  return (
    <div className='to-do-list'>
        <h1>To-Do-List</h1>
        <div>
            <input 
                type="text" 
                placeholder='Enter a task'
                value={newTask}
                onChange={handleInputChange}
            />
            <button
                className='addBtn'
                onClick={addTask}>
                Add
            </button>
        </div>
        <ol>
            {tasks.map((task, index) => 
                <li key={index}>
                    <span className='text'>{task}</span>
                    <button
                        className='deleteBtn'
                        onClick={() => deleteTask(index)}>
                        delete
                    </button>
                    <button
                        className='moveBtn'
                        onClick={() => moveTaskUp(index)}>
                        up
                    </button>
                    <button
                        className='moveBtn'
                        onClick={() => moveTaskDown(index)}>
                        down
                    </button>
                </li>
            )}
        </ol>
    </div>
  )
}
