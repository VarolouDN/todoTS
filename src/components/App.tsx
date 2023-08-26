import {useState,useEffect,useRef} from "react";
import {ITodo}  from '../types/data'
import {TodoList} from "./TodoList";

export const App:React.FC=()=>{

 const[value,setValue] =useState('')
const [todos,setTodos]=useState<ITodo[]>([])
    const inputRef=useRef<HTMLInputElement>(null)


    useEffect(function(){
         if(inputRef.current) {


                 inputRef.current.focus()
             }



        console.log(inputRef.current)
    },[])
    const handleKeyDown:React.KeyboardEventHandler<HTMLInputElement>=(e)=>{
     if(inputRef.current) {
     if(e.key==='Enter') addTodo()
     }
     }

    const addTodo=():void=> {
     if(!value) return
      else {
         setTodos(prev => [...todos, {
             id: Date.now(),
             title: value,
             complete: false
         }])
         setValue('')
     }
    }
    const removeTodo=(id:number):void=>{
     setTodos(prev=>todos.filter((todo)=>id!==todo.id))
    }
    const toggleTodo=(id:number):void=>{
     setTodos(prev=>todos.map(todo=>todo.id===id?{...todo,complete:!todo.complete}:todo))
    }

    const handleChange:React.ChangeEventHandler<HTMLInputElement>=(e)=>{

      setValue(e.target.value)
    }
    return <div>
        <div>
            <input value={value} onChange={handleChange} onKeyDown={handleKeyDown} ref={inputRef}/>
            <button onClick={addTodo} >Add</button>
        </div>
        <TodoList items={todos} removeTodo={removeTodo} toggleTodo={toggleTodo}/>
    </div>
}