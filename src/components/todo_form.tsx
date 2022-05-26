import React, { useState, ChangeEvent, KeyboardEvent } from 'react';
import { ToDoContext } from '../contexts/todo_context';

const ToDoForm: React.FC = () => {
     const { todoList, setTodoList } = ToDoContext();
     const [task, setTask] = useState<string>("");

     const onHandleAddTask = (): void => {
          if (task === "") return;
          setTodoList([{ title: task, select: false }, ...todoList]);
          setTask("");
     }
     const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
          setTask(event.target.value);
     }
     const handleEnter = (event: KeyboardEvent<HTMLInputElement>): void => {
          if (event.key === 'Enter') {
               onHandleAddTask();
          }
     }
     return (
          <React.Fragment>
               <input
                    value={task}
                    type='text'
                    placeholder='Enter your task...'
                    onChange={handleInputChange}
                    onKeyDown={handleEnter}
                    className='flex-1 mr-1 border-blue-500 outline-blue-500 rounded border border-solid border-current px-3 py-2 text-base'
               />
               <button className='text-white border border-solid border-blue-500 rounded px-3 py-2 bg-blue-500' onClick={onHandleAddTask}>
                    Add task
               </button>
          </React.Fragment>
     );
}

export default ToDoForm