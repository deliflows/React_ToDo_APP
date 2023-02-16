import { useState } from 'react';

export default function AddNewTodo({AddThisTodo}){
    const [formInfo, setFormInfo] = useState({
        taskname:"",
        complete: false,
        priority:""
    })
    function onInputChange(event){
        setFormInfo({...formInfo, [event.target.name]:event.target.value});
    }
    function onFormSubmit(event){
        event.preventDefault();
        AddThisTodo(formInfo);
    }

    return(
        <form onSubmit={onFormSubmit}>
            <p>Taskname:</p>
            <input name='taskname' onChange={onInputChange}></input>
            <p>Priority:</p>
            <input name='priority' onChange={onInputChange}></input>
            <button type='submit'>Add Task</button>
        </form>
    )

}