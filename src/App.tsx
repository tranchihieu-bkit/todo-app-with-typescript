import React, { useEffect, useState } from 'react';
import TodoList from './components/todo_list';
import TodoForm from './components/todo_form';
import { IToDoItemValue } from './interfaces/todo_interface';
import ImgBackground from './assets/background.jpg';
interface IContextValue {
  setTodoList: (todoList: IToDoItemValue[]) => void
  todoList: IToDoItemValue[];
}

export const MyContext = React.createContext<undefined | IContextValue>(undefined);

const App: React.FC = () => {

  let todoListStorageValue: string = localStorage.getItem("todo_list") || "[]";
  let todoListStorage: IToDoItemValue[] = JSON.parse(todoListStorageValue);
  const [todoList, setTodoList] = useState<IToDoItemValue[]>(todoListStorage);
  const [isCenter, setIsCenter] = useState<boolean>(!!(todoList.length <= 0));

  useEffect(() => {
    if (todoList.length > 0)
      setIsCenter(false);
    localStorage.setItem("todo_list", JSON.stringify(todoList || []));
  }, [todoList]);

  return (
    <MyContext.Provider value={{ setTodoList, todoList }}>
      <div className={`w-full h-screen flex ${isCenter ? 'display-center' : 'display-start'} items-center flex-col overflow-y-auto`}>
        <h1 className='text-5xl font-bold text-blue-500 my-10 text-center'>TODO APP WITH TYPESCRIPT</h1>
        <div className='w-full sm:w-9/12 lg:w-4/12 flex justify-between items-center md:px-0 px-2'>
          <TodoForm />
        </div>
        <div className='w-full sm:w-9/12 lg:w-4/12 md:px-0 px-2 mt-6'>
          <TodoList />
        </div>
      </div>
    </MyContext.Provider>
  );
}

export default App;
