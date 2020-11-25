import { v4 as uuidv4 } from 'uuid';

export  const toDoReducer = ( todos, action ) =>{
    switch (action.type) {
        case "ADD_TODO":
          return  [ ...todos, {
                todo: action.todo,
                id : uuidv4()
            }]
        case "REMOVE_TODO":
            return todos.filter(todo=>todo.id !==action.id)
            
    
        default:
            return todos;
    } 
}