import logo from './logo.svg';
import './App.css';

const Hello = (props) => {
    console.log(props)
    return (
    <div>
        <p>Hello {props.name} you are {props.age} years old</p>
    </div>
)}

const App = () => {
    const france = {name: "François", age: 'François +2'}
    return (
        <>
            <h1>Greetings</h1>
            <Hello name='Migu' age={69}/>
            <Hello name={france.name} age={france.age}/>
        </>
    )
}

export default App
