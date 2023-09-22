const Part = (props) => {
    return (<p>{props.title} {props.exercises}</p>)
}

const Content = (props) => {
    return (
        <div>
            <Part title = {props.parts[0].title} exercises = {props.parts[0].exercises}/>
            <Part title = {props.parts[1].title} exercises = {props.parts[1].exercises}/>
            <Part title = {props.parts[2].title} exercises = {props.parts[2].exercises}/>
        </div>
    )
}

export default Content;