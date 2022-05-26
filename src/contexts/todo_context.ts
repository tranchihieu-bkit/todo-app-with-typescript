import { useContext } from 'react';
import { MyContext } from '../App';

export const ToDoContext = () => {
     const todoContext = useContext(MyContext);
     if (!todoContext) return { todoList: [], setTodoList: () => { } };
     return todoContext;
}