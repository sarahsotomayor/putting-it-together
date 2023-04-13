import React, { useState } from 'react';

const PersonalCard = (props) => {

    const [state, setState] = useState(props.age);

    const handleCount = () => {
        setState(state + 1);
    }

    return(
        <div>
            <h1>{props.lastName}, {props.firstName}</h1>
            <p>Age: {state}</p>
            <p>Hair Color: {props.hairColor}</p>

            <button onClick={ handleCount }>Birthday Button for {props.firstName} {props.lastName}</button>
        </div>
    )
}

export default PersonalCard;