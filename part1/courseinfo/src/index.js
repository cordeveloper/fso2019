import React from 'react';
import ReactDOM from 'react-dom';
import { removePropertiesDeep } from '@babel/types';

const Header = (props) => {
  return (
    <h1>{props.name}</h1>
  )
}

const Content = (props) => {
  
  return(
    <React.Fragment>
      {
        props.parts.map(
          prop => {
            return(
              <Part name={prop.name} exercises={prop.exercises}/>
            )
          }
        )
      }
    </React.Fragment>
  )
 
}

const Total = (props) => {
  const totalExercises = props.parts.reduce( (total, arr) => { return total + arr.exercises}, 0 )
  return(
    <p>Number of exercises {totalExercises}</p>
  )
}

const Part = (props) => {
  return (
    <p>{props.name} {props.exercises}</p>
  ) 
}



const App = () => {

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      } 
    ]
  }


  return(
    <div>
      <Header name={course.name} />
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )

  
}

ReactDOM.render(<App />, document.getElementById('root'))