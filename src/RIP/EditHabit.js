import { useState } from 'react';
import Button from '@mui/material/Button';

function EditHabit({thePropWithTheHabitName, thePropWithTheEditFunction}){
    const [editHabit, setEditHabit] = useState(thePropWithTheHabitName);
    function onInputChange(event){
        setEditHabit(event.target.value);
    }
    function onFormSubmit(event){
        event.preventDefault();
        thePropWithTheEditFunction(editHabit);
    }
    return(
        <form onSubmit={onFormSubmit}>
            <input onChange={onInputChange} value={editHabit}></input>
            <Button type='submit'>Save</Button>
        </form>
    )
}

export default EditHabit;