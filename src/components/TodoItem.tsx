import React from "react";
import './todoItem.css'
import {ITodo} from "../types/data"
interface ITodoItem extends ITodo{
    removeTodo:(id:number)=>void,
    toggleTodo:(id:number)=>void
}


export const TodoItem:React.FC<ITodoItem>=(props)=>{

    const {id,title,complete,removeTodo,toggleTodo}=props
    return <div>
      <input type='checkbox' checked={complete} onChange={()=>toggleTodo(id)}/>
        {title}
        <button className='delBtn' onClick={()=>removeTodo(id)}>x</button>
    </div>
}