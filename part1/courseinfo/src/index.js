import React from 'react';
import ReactDOM from 'react-dom';

const Part = (props) => {
  return (
    <p>{props.name} {props.exercises}</p>
  ) 
}

const App = () => {
  const course = 'Half Stack application development';
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return(
    <div>
     <Part name={part1.name} exercises={part1.exercises}></Part>
     <Part name={part2.name} exercises={part2.exercises}></Part>
     <Part name={part3.name} exercises={part3.exercises}></Part>
    </div>
  )

  
}

ReactDOM.render(<App />, document.getElementById('root'))