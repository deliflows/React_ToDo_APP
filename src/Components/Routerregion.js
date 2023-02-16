import Home from '../Pages/Home';
import Todo from '../Pages/Todo';
import {Routes, Route} from 'react-router-dom'

export default function Routerregion(){
    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/todo' element={<Todo/>}/>
        </Routes>
    )
}