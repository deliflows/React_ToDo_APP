
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import { useState } from 'react';
import EditTask from './EditTask';

function Todo({todoName, theCompleteTaskFunction, thePropWithTheKey, theEditTaskProp}){
    const [editClicked, setEditClicked] = useState(false);
    function onCompleteClick(){
        theCompleteTaskFunction(thePropWithTheKey)
    }
    function onEditClick(){
        setEditClicked(!editClicked);
    }
    function clickSave(theUpdatedTask){
        theEditTaskProp(thePropWithTheKey, theUpdatedTask);
        onEditClick();
    }
    let theContent = (
        <div>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
             Task Name:
            </Typography>
            <Typography variant="h5" component="div" gutterBottom>
            {todoName}
            </Typography>
        </div>
    )
    if(editClicked){
        theContent = (<EditTask 
            thePropWithTheTaskName={todoName} 
            thePropWithTheEditFunction={clickSave}></EditTask>)
    }
    return(
        <div>
            <Card sx={{ minWidth: 250, maxWidth:300, minHeight: 250 }}>
                <CardContent>
                    {theContent}
                    <Button onClick={onCompleteClick} variant="contained" color="secondary">Complete</Button>
                    <Button onClick={onEditClick} variant="contained" color="secondary">Edit</Button>
                </CardContent>
            </Card>
        </div>
    )
}

export default Todo;