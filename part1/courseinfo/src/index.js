import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  return (
   <React.Fragment>
      <h1>{props.course}</h1>
   </React.Fragment>
  )
}

const Content = (props) => {

  return (
    <React.Fragment>
      {
        props.content.map(
          part => {
            
            return(
              <Part part={part.name} exercises={part.exercises}/>
            )
          }
        )
      }
    </React.Fragment>
  )

}

const Part = (props) => {

  return(
    <p>{props.part} {props.exercises}</p>
  )
}

const Total = (props) => {
 
  return (
    <p>Number of exercises {props.content}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development';


  const contentData = [
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
        exercises: 15
      }
    ]

    const total = 32;
  

  return (
    <div>
     <Header course={course}/>
     <Content content= {contentData}/>
     <Total content= {total}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))