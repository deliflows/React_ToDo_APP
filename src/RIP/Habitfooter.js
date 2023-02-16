import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function Habitfooter(){
    const [positive, setPositive] = useState(0);
    const [negative, setNegative] = useState(0);

    function onPositiveClick(){
        setPositive(positive + 1)
    }

    function onNegativeClick(){
        setNegative(negative +1)
    }

    return(
        <div>
            <Button onClick={onPositiveClick} variant="success">{positive}</Button>
            <Button onClick={onNegativeClick} variant="danger">{negative}</Button>
        </div>
    )
}

export default Habitfooter