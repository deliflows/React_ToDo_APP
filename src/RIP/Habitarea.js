import Habit from "./Habit"
// import CardGroup from "react-bootstrap/CardGroup"
import './styles/Habitarea.css'

function Habitarea({thePropForTheCurrentHabitINeedToAddToTheHabitArea, theEditHabitProp}){
    if(thePropForTheCurrentHabitINeedToAddToTheHabitArea.length===0){
        return(<h3>Add a new Habit!</h3>)
    }
    else {
        const theHabits = thePropForTheCurrentHabitINeedToAddToTheHabitArea.map(function(habitInfo){
            console.log(habitInfo)
            return(<Habit 
                key={habitInfo.id} 
                theHabit={habitInfo.theHabit}
                theEditHabitProp={theEditHabitProp}
                thePropWithTheKey={habitInfo.id}
                />)
        })
        return(
            <div className="habitCard">
                {theHabits}
            </div>
        )
    }
}

export default Habitarea;