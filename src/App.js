import React, { Component } from 'react';

import classes from './App.css';
import Person from './Person/Person';


class App extends Component {
  state={
    persons: [
      {id:'id1', name:'pratik', age:21},
      {id:'id2', name:'vito',age:65},
      {id:'id3', name:'michael',age:33}
    ],
    otherState: 'some other state',
    showPersons: false
  };

  deletePersonHandler = (personIndex) => {
    const persons=[...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons:persons})
  }

  nameChangedHandler = (event,id) => {
    const personIndex= this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name= event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex]= person;

    this.setState({persons: persons});
  }

  togglePersonHandler=()=>{
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    let persons = null;
    let btnclass = '';

    if(this.state.showPersons){
      persons =  (
        <div>
          {this.state.persons.map((person,index) => {
            return <Person
            click= {()=>this.deletePersonHandler(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            changed={(event)=> this.nameChangedHandler(event,person.id)}/>
          })
          }
        </div>
      );
      
      btnclass=classes.Red;
    }

    const assignedClass=[];
    if(this.state.persons.length <= 2 ){
      assignedClass.push(classes.red);
    }
    if(this.state.persons.length <= 1){
      assignedClass.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>"Hi it's pratik"</h1>
        <p className={assignedClass.join(' ')}>yeaaha</p>
        <button className={btnclass} onClick={this.togglePersonHandler}>
          yeaaahhhhhh
        </button>
        {persons}
      </div>
    );
    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'work or not?'));
  }
}

export default App;
