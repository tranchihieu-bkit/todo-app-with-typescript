import React from 'react';
import { ToDoContext } from "../contexts/todo_context";
import { IToDoItemValue } from '../interfaces/todo_interface';

interface IProps {
     item: IToDoItemValue;
     index: number;
}

const ToDoItem: React.FC<IProps> = (props: IProps) => {
     const { todoList, setTodoList } = ToDoContext();
     const onHandleDelete = (): void => {
          setTodoList(todoList.filter((item, index) => index !== props.index));
     }
     const onHandleSelect = (): void => {
          setTodoList([...todoList.map((item, index) => {
               if (index === props.index) {
                    item.select = !item.select;
               }
               return item;
          })]);
     }
     return (
          <li className={`rounded-md px-3 py-1 my-3 flex justify-between items-center bg-gray-light`}>
               {props.item.select && <i className='fa fa-check text-green-600 mr-2' />}
               <p onClick={onHandleSelect} className={`truncate cursor-pointer break-all text-lg flex-1 ${props.item.select === true ? 'text-gray-400' : 'text-black'}`}>
                    {props.item.title}
               </p>
               <i className={`fa fa-trash-o ml-5 cursor-pointer text-lg text-red-600 font-semibold`} onClick={onHandleDelete} />
          </li>
     );
}

export default ToDoItem;