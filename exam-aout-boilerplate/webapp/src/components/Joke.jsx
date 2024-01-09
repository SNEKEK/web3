import {useParams} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {Context} from "../contexts/jokescoreContext";


const Joke = () => {
    const params = useParams()
    const { jokes, getJokeWithScores, addScore } = useContext(Context)
    const [ gucci, setGucci ] = useState([])
    const [ username, setUsername ] = useState([""])
    const [ score, setScore ] = useState([0])

    useEffect(() => {
        const futureGucci = getJokeWithScores(params.id)
        setGucci(futureGucci)
    }, [jokes])

    function handleSubmit(e){
        e.preventDefault()
        addScore(username, score, params.id)
    }

    return (
        <>
            {gucci&&gucci.scores?
                <div>
                    <h1>{gucci.question}</h1>
                    <h1>{gucci.answer}</h1>
                    {gucci.scores.map(score => <p key={score.id}>{score.username} : {score.score}</p>)}
                    <p>{gucci.averageScore} {gucci.scoreCount}</p>
                    <form onSubmit={handleSubmit}>
                        <input type='text' min={0} max={10} onChange={(e) => setUsername(e.target.value)} placeholder={'username'}/>
                        <input type='number' onChange={(e) => setScore(e.target.value)}/>
                        <input type={"submit"}/>
                    </form>
                </div> :<p>lOaDinG</p>}
        </>
    )

}

export default Joke