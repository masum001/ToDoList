import React,{ useContext, useState } from 'react'
import TextField from '@material-ui/core/TextField';
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { ToDoContext } from '../context/ToDoContext';

const ToDoForm = () => {
    const { dispatch } = useContext(ToDoContext);

    const [ todo, setTodo] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault();
       dispatch({ type: "ADD_TODO", todo: todo})
       console.log(todo)
    }
    return (
        <form>
            <Grid container direction="row">
            <Grid item container>
                <Grid sm={10} xs={4}>
                     <TextField id="filled-basic" value={todo} label="Add new task..."  fullWidth style={{marginTop: 30}} onChange={(e)=>setTodo(e.target.value)}/>
                </Grid>
                <Grid sm={2} xs={2}>
                    <Button variant="contained"
                             style={{background: "black",color: "white", marginTop: 40}}
                             onClick={handleSubmit}>Add New Task</Button>
                </Grid>
            </Grid>
            
            </Grid>
        </form>
    )
}

export default ToDoForm
