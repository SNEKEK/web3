const Header = (props) => {
  return (
      <>
        <h2>{props.courseName}</h2>
      </>
  )
}

const Part = (props) => {
    return (<p>{props.title} {props.exercises}</p>)
}

const Content = (props) => {
    return (
        <>
            <Part title = {props.parts[0].title} exercises = {props.parts[0].exercises}/>
            <Part title = {props.parts[1].title} exercises = {props.parts[1].exercises}/>
            <Part title = {props.parts[2].title} exercises = {props.parts[2].exercises}/>
        </>
    )
}

const Total = (props) => {
    return (
        <p>Number of exercises {props.total}</p>
    )
}

const App = () => {
  const course = 'Half Stack application development'
    const parts = [
        { title: "Fundamentals of React", exercises: 10 },
        { title: "Using props to pass data", exercises: 7 },
        { title: "State of a component", exercises: 14 },
    ];

  return (
      <div>
        <Header courseName={course} />
        <Content parts={parts} />
        <Total total = {parts[0].exercises + parts[1].exercises + parts[2].exercises}/>
      </div>
  )
}

export default App