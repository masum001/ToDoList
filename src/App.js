import { Grid } from '@material-ui/core';
import './App.css';
import Banner from './components/Banner';
import Header from './components/Header';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';
import ToDoContextProvider from './context/ToDoContext';




function App() {
 
  return (
   <ToDoContextProvider>
    <Grid container direction = "column">
      <Grid item>
          <Header /> 
      </Grid>
      <Grid item container>
        <Grid sm={2} xs={false}/>
          <Grid item sm={8} xs={12}>
            <Banner />
            <ToDoForm />
            <ToDoList />
          </Grid>
        <Grid sm={2} xs={false}/>
      </Grid>
    </Grid>
   </ToDoContextProvider>
      
  
  );
}

export default App;
