import {BrowserRouter as Router} from 'react-router-dom'
import Routerregion from './Components/Routerregion'
import Header from './Components/Header'

export default function App(){
  return(
    <div>
      <Router>
        <Header/>
        <Routerregion/>
      </Router>
    </div>
  )
}












import Header from './Header';
import Addhabit from './Addhabit';
import Todoarea from './Todoarea';
import Habitarea from './Habitarea';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      primary: {
        light: '#ff8a50',
        main: '#ff5722',
        dark: '#c41c00',
        contrastText: '#000000',
      },
      secondary: {
        light: '#9061e2',
        main: '#5s34af',
        dark: '#27057f',
        contrastText: '#000',
      },
    },
  });

function App(){
  const [count, setCount] = useState(0);
  const [habitCount, setHabitCount] = useState(0)
  const [newTodoData, setNewTodoData] = useState([]);
  const [newHabitData, setNewHabitData] = useState([]);
    
    function theSearch(searchText){
        setNewTodoData([...newTodoData, {id:count, theTodo:searchText}]);
        setCount(count + 1);
    }
    function theHabitInput(searchText){
        setNewHabitData([...newHabitData, {id:habitCount, theHabit:searchText}]);
        setHabitCount(habitCount +1);
    }
    function completeTask(id){
      const newTodoList = newTodoData.filter(function(theTodo){
        return(theTodo.id !== id);
      })
      setNewTodoData(newTodoList);
    }
    function editTask(id, theNewTask){
      const newTodoList = newTodoData.map(function(theTodo){
        if(theTodo.id === id){
          return {...theTodo, theTodo:theNewTask}
        }
        else{
          return theTodo;
        }
      })
      setNewTodoData(newTodoList);
    }
    function editHabit(id, theNewHabit){
      const newHabitList = newHabitData.map(function(theHabit){
        if(theHabit.id === id){
          return{...theHabit, theHabit:theNewHabit}
        }
        else{
          return theHabit
        }
      })
      setNewHabitData(newHabitList);
    }

    return(
        <div>
            <Header handleSearch={theSearch}/>
            <Todoarea theCurrentTodo={newTodoData} theCompleteTaskFunction={completeTask} theEditTaskProp={editTask}/>
            <Addhabit newHabitFunction={theHabitInput}/>
            <Habitarea thePropForTheCurrentHabitINeedToAddToTheHabitArea={newHabitData} theEditHabitProp={editHabit}/>
        </div>
    )
}

export default App;