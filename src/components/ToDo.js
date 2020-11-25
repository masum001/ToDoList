import React,{ useContext, useState } from 'react'
import { ToDoContext } from '../context/ToDoContext'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import { Container, Grid } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';

const usestyles = makeStyles(()=>({
    doneIcon : {
        float : "left"
    },
    deleteStyle : {
        textDecoration: 'line-through'
    },
    cardTextStyle : {

    }
}))

const ToDo = ({todo}) => {

    const { dispatch } = useContext(ToDoContext);
    const [ checked, setchecked ] = useState(false);
    const classes = usestyles()
    const handleChange =()=>{setchecked(!checked)
    console.log(checked)}
    return (
        <div>
        <Container>
        <Card variant="outlined" style={{ marginTop: 20, background : "Darkgray"}}>
            <CardContent >
            <Grid container direction="row">
                <Grid item sm={2}>
                    <IconButton>
                        <DeleteIcon onClick={()=>dispatch({ type: "REMOVE_TODO", id : todo.id})}/>
                    </IconButton>
                </Grid>
                <Grid item sm={8}>
                     <Typography variant="h6" component="h2" align='center'  className={checked? classes.deleteStyle : classes.cardTextStyle}>{todo.todo}</Typography>
                </Grid>
                <Grid item sm={2}>
                    <IconButton>
                        <DoneOutlineIcon onClick={handleChange}/>
                    </IconButton>
                </Grid>
               
            </Grid>
            </CardContent>
        </Card>
        </Container>
        </div>
    )
}

export default ToDo
