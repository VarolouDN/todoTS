import {TodoItem} from './TodoItem'
import {ITodo} from "../types/data";

interface ITodoListProps{
    items:ITodo[],
    removeTodo:(id:number)=>void,
    toggleTodo:(id:number)=>void
}

export const TodoList:React.FC<ITodoListProps>=(props)=>{
    const{items,removeTodo,toggleTodo}=props
    return <div>
        {items.map(todo=>{
      return <TodoItem key={todo.id} {...todo} removeTodo={removeTodo} toggleTodo={toggleTodo} />
        }
        )}
    </div>
}