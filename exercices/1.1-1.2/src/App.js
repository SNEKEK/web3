import Header from "./components/Header";
import Content from "./components/Content";
import Total from "./components/Total";

const App = () => {
  const course = 'Half Stack application development'
    const parts = [
        { title: "Fundamentals of React", exercises: 10 },
        { title: "Using props to pass data", exercises: 7 },
        { title: "State of a component", exercises: 14 },
    ];

  return (
      <>
        <Header courseName={course} />
        <div id = "detail">
            <Content parts={parts} />
            <Total total = {parts[0].exercises + parts[1].exercises + parts[2].exercises}/>
        </div>
      </>
  )
}

export default App