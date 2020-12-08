import React from 'react';

import classes from './Cockpit.css';

const cockpit = (props) => {
    const assignedClass=[];
    let btnclass='';

    if(props.showPersons){
        btnclass=classes.Red;
    }
    if(props.persons.length <= 2 ){
      assignedClass.push(classes.red);
    }
    if(props.persons.length <= 1){
      assignedClass.push(classes.bold);
    }
    
    return(
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClass.join(' ')}>yeaaha</p>
            <button 
                className={btnclass} 
                onClick={props.clicked}>yeaaahhhhhh</button>
        </div>
    );
}

export default cockpit;


