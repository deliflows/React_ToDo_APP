import { useState } from 'react';

export default function EditTodo({EditTodo, todo}){
    console.log(todo)
    console.log(EditTodo)
    const [formInfo, setFormInfo] = useState({
        taskname: todo.taskname,
        priority: todo.priority
    })
    function onInputChange(event){
        setFormInfo({...formInfo, [event.target.name]:event.target.value});
    }
    function onFormSubmit(event){
        event.preventDefault();
        EditTodo(formInfo, todo.id);
    }

    return(
        <form onSubmit={onFormSubmit}>
            <p>Taskname:</p>
            <input name='taskname' onChange={onInputChange}></input>
            <p>Priority:</p>
            <input name='priority' onChange={onInputChange}></input>
            <button type='submit'>Edit</button>
         </form>
    )

}