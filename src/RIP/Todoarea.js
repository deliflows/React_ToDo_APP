import Todo from "./Todo"
// import CardGroup from "react-bootstrap/CardGroup"
import './styles/Todo.css'

function Todoarea({theCurrentTodo, theCompleteTaskFunction, theEditTaskProp}){
    if(theCurrentTodo.length===0){
        return(<h3>Add a new Todo!</h3>)
    }
    else {
        const theTodos = theCurrentTodo.map(function(todoInfo){
            return(<Todo 
                key={todoInfo.id} 
                todoName={todoInfo.theTodo} 
                theCompleteTaskFunction={theCompleteTaskFunction} 
                thePropWithTheKey={todoInfo.id} 
                theEditTaskProp={theEditTaskProp}/>)
        })
        return(
            <div className="todoCard">
                {theTodos}
            </div>
        )
    }
}

export default Todoarea;