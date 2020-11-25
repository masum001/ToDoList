import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(()=>({
    appBar : {
        background : 'black'
    },
    typographyStyle : {
        flex: 1
    }
}))

const Header = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" className={classes.typographyStyle}>
              Daily Tracker
            </Typography>
            <Button color="inherit">***</Button>
          </Toolbar>
        </AppBar>
      </div>
    )
}

export default Header
