import { useState } from 'react';
import TextField from '@mui/material/TextField';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import IconButton from '@mui/material/IconButton';
import './styles/Addhabit.css'

function Addhabit({ newHabitFunction }){
    const [theNewHabit, setTheNewHabit] = useState('');
    function onInputChange(event){
        setTheNewHabit(event.target.value);
    }
    function onFormSubmit(event){
        event.preventDefault();
        newHabitFunction(theNewHabit);
        setTheNewHabit('');
    }
    return(
        <div>
            <form className='habitInput' onSubmit={onFormSubmit}>
                <TextField color='secondary' id="filled-basic" label="Add a Habit" variant="filled" onChange={onInputChange} value={theNewHabit}/>
                <IconButton color='secondary' type='submit' aria-label="Add a Habit">
                <AddCircleIcon />
                </IconButton>
            </form>
        </div>
    )
}

export default Addhabit;