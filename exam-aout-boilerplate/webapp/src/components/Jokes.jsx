
import {Context} from "../contexts/jokescoreContext";
import {useContext} from "react";
import {useNavigate} from "react-router-dom";

const Jokes = () => {
    const navigate = useNavigate()
    const {jokes} = useContext(Context)
    return (
        <>
            {jokes.map(joke => <p key={joke.id} onClick={() => navigate(`/jokes/${joke.id}`)}>{joke.question} {joke.answer}</p>)}
        </>
    )
}

export default Jokes
