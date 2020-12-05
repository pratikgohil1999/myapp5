import React from 'react';

import classes from './Person.css'; 
const person = (prop) => {
    return (
        <div className={classes.Person}>
            <p onClick={prop.click}>This is {prop.name} and I am {prop.age} years old!</p>
            <p>{prop.children}</p>
            <input type="text" onChange={prop.changed} value={prop.name}/>
        </div>
    )
};

export default person;