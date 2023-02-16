import {useState, useEffect} from 'react';
import ASingleTodo from '../Components/ASingleTodo';
import AddNewTodo from '../Components/AddNewTodo';

export default function Todo(){
    const[todoList, setTodoList] = useState([]);
    const [addTodoOpen, setAddTodoOpen] = useState(false);

    async function GetAllTodos(){
        let res = await fetch(`http://localhost:3005/api/todo`);
        res = await res.json();
        setTodoList(res.results);
    }

    function onAddClick(){
        setAddTodoOpen(!addTodoOpen);
    }

    async function DeleteTask(id){
        let res = await fetch(`http://localhost:3005/api/delete/${id}`)
        res = await res.json();
        GetAllTodos();
    }

    async function AddThisTodo(todo){
        let res = await fetch(`http://localhost:3005/api/create`,
        {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
            body: JSON.stringify(todo)
        });
        res = await res.json();
        console.log(res);
        GetAllTodos();
        onAddClick();
    }
    async function EditTodo(todo, id){
        let res = await fetch(`http://localhost:3005/api/edit/${id}`,
        {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
            body: JSON.stringify(todo)
        });
        res = await res.json();
        GetAllTodos();
    }
    useEffect(function(){
        GetAllTodos();
    },[]);

    let addNewTodoArea = <button onClick={onAddClick}>Add Task</button>;
    if(addTodoOpen){
        addNewTodoArea = (
            <div>
                <AddNewTodo AddThisTodo={AddThisTodo}/>
                <button onClick={onAddClick}>Cancel</button>
            </div>
        )
    }
 let todoCards;
 todoCards = todoList.map(function(todo){
    return(
        <ASingleTodo key={todo.id} todo={todo} DeleteTask={DeleteTask} EditTodo={EditTodo}/>
    )
 })

    return(
        <div>
            {todoCards}
            {addNewTodoArea}
        </div>
    )
}