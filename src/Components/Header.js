import {Link} from 'react-router-dom';

export default function Header(){
    return(
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/todo'>Todos</Link></li>
            </ul>
        </nav>
    )
}


// import TextField from '@mui/material/TextField';
// import AddCircleIcon from '@mui/icons-material/AddCircle';
// import IconButton from '@mui/material/IconButton';
// import { useState } from 'react';
// import './styles/Todoinput.css'

// function Header({ handleSearch }){
//     const [theSearchTerm, setTheSearchTerm] = useState('');
//     function onInputChange(event){
//         setTheSearchTerm(event.target.value);
//     }
//     function onFormSubmit(event){
//         event.preventDefault();
//         handleSearch(theSearchTerm);
//         setTheSearchTerm('');
//     }
//     return(
//         <div>
//             <form className='todoInput' onSubmit={onFormSubmit}>
//                 <TextField color='secondary' id="filled-basic" label="Add a Task" variant="filled" onChange={onInputChange} value={theSearchTerm}/>
//                 <IconButton type='submit' color="secondary" aria-label="Add a Task">
//                 <AddCircleIcon />
//                 </IconButton>
//             </form>
//         </div>
//     )
// }

// export default Header;