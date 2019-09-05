import React from 'react';
import ReactDOM from 'react-dom';



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



const App = () => {


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


  

  return (
    <div>
      <Content content= {contentData}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))