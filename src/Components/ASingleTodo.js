import {useState} from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import EditTodo from './EditTodo'

export default function ASingleTodo({todo, DeleteTask, EditTodo}){
    const [editClicked, setEditClicked] = useState(false);

    function onEditClick(){
        setEditClicked(!editClicked)
    }
    function onDeleteClick(){
        DeleteTask(todo.id);
    }

    let editArea =  (
    <div>
    {/* <Button onClick={onEditClick} variant="contained" color="secondary">Edit</Button> */}
    <button onClick={onEditClick}>Edit</button>
    </div>
)
    if(editClicked){
        editArea = (
            <div>
                <EditTodo todo={todo} EditTodo={EditTodo}/>
                <Button onClick={onEditClick}>Cancel</Button>
            </div>
        )
    }
    let theContent = (
        <div>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
             Task Name:
            </Typography>
            <Typography variant="h5" component="div" gutterBottom>
            {todo.taskname}
            </Typography>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
             Priority:
            </Typography>
            <Typography variant="h5" component="div" gutterBottom>
            {todo.priority}
            </Typography>
        </div>
    )
    return(
        <div>
            <Card sx={{ minWidth: 250, maxWidth:300, minHeight: 250 }}>
                <CardContent>
                    {theContent}
                    <Button  onClick={onDeleteClick} variant="contained" color="secondary">Complete</Button>
                    {editArea}
                </CardContent>
            </Card>
        </div>
    )
}