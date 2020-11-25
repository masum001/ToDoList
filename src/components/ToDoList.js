import React,{ useContext } from 'react'
import { ToDoContext } from '../context/ToDoContext'
import ToDo from './ToDo'

const ToDoList = () => {
    const { todos } = useContext(ToDoContext)

    return (
        <div>
            {
                todos.map(todo=>(
                    <ToDo key={todo.id} todo={todo}/>
                ))
            }
        </div>
    )
}

export default ToDoList
