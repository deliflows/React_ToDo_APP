import { useState } from 'react';
import Button from '@mui/material/Button';

function EditTask({thePropWithTheTaskName, thePropWithTheEditFunction}){
    const [editTask, setEditTask] = useState(thePropWithTheTaskName);
    function onInputChange(event){
        setEditTask(event.target.value);
    }
    function onFormSubmit(event){
        event.preventDefault();
        thePropWithTheEditFunction(editTask)
    }
    return(
        <form onSubmit={onFormSubmit}>
            <input onChange={onInputChange} value={editTask}></input>
            <Button type='submit'>Save</Button>
        </form>
    )
}

export default EditTask;