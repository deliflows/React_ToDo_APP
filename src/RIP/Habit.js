import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import EditHabit from './EditHabit';
import { useState } from 'react';

function Habit({theHabit, thePropWithTheKey, theEditHabitProp}){
    const [editClicked, setEditClicked] = useState(false);
    function onEditClicked(){
        setEditClicked(!editClicked);
    }
    function clickSave(theUpdatedHabit){
        theEditHabitProp(thePropWithTheKey, theUpdatedHabit);
        onEditClicked();
    }
    let theContent = (
        <div>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Habit Neme:
            </Typography>
            <Typography variant="h5" component="div" gutterBottom>
                {theHabit}
            </Typography>
        </div>
    )
    if(editClicked){
        theContent = (<EditHabit
        thePropWithTheHabitName={theHabit}
        thePropWithTheEditFunction={clickSave}>
        </EditHabit>)
    }
    return(
        <div>
        <Card sx={{ minWidth: 250, maxWidth:300, minHeight: 250 }}>
            <CardContent>
                {theContent}
                <ButtonGroup
                 disableElevation
                 variant="contained"
                 aria-label="Disabled elevation buttons"
                 >
                <Button onClick={onEditClicked} variant="contained" color="secondary">Edit</Button>
                <Button color="success">+</Button>
                <Button color="error" >-</Button>
                </ButtonGroup>
            </CardContent>
        </Card>
    </div>
    )
}

export default Habit;