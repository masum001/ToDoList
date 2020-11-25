import React,{ createContext, useReducer } from 'react';
import { toDoReducer } from '../reducer/toDoReducer';

export const ToDoContext = createContext();

const ToDoContextProvider =( props )=>{


const [ todos, dispatch ] = useReducer(  toDoReducer, [{
    todo: "Study", id : 1
}]);


return (
    <ToDoContext.Provider value={{ todos, dispatch }}>
         {props.children}
    </ToDoContext.Provider>
)
   
}

export default ToDoContextProvider;