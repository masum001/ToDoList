import React,{ useContext  } from 'react'
import { ToDoContext } from '../context/ToDoContext'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(()=>({
    cardStyles : {
        marginTop : 20,
        background : "black",
        color : "white"
    }
}))

const Banner = () => {
 
    const { todos } = useContext(ToDoContext);
    const classes = useStyles();

    return (
        <Card variant='outlined' className={classes.cardStyles}>
            <CardContent>
            
            {(todos.length)? <Typography variant="h6" align="center">You have {todos.length} task to finish </Typography>
                :<Typography variant="h6" align="center"> You have all the free time in the world</Typography>}
             
            </CardContent>
        </Card>
    )
}

export default Banner
