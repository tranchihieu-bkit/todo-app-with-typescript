import React from 'react';
import TodoItem from "./todo_item";
import { ToDoContext } from "../contexts/todo_context";
import { IToDoItemValue } from '../interfaces/todo_interface';

const ToDoList: React.FC = () => {
     const { todoList } = ToDoContext();
     return (
          <ul>
               {todoList.sort((a: IToDoItemValue, b: IToDoItemValue) => {
                    if (a.select > b.select) return 1;
                    if (a.select < b.select) return -1;
                    return 0;
               }).map((item: IToDoItemValue, index: number) => <TodoItem key={index} item={item} index={index} />)}
          </ul>
     );
}

export default ToDoList;