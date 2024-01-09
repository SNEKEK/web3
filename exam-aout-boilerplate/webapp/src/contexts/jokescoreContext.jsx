import {createContext, useEffect, useState} from "react";
import jokeApi from "../services/jokeApi";
import scoreApi from "../services/scoreApi";

const Context = createContext(null);
const ProviderWrapper = ({ children }) => {
    const [ jokes, setJokes ] = useState([]);
    const [ scores, setScores ] = useState([]);

    function getJokeWithScores(id){
        const jk24 = jokes.find(joke => joke.id === id)
        if (!jk24)
            return null
        jk24.scores = scores.filter(score => score.joke === id)
        return jk24
    }

    function addScore(username,score,joke){
        const newScore = {
            username,
            score,
            joke
        }
        scoreApi.createOne(newScore).then(initialLoad)
    }

    const initialLoad = () => {
        scoreApi
            .getAll()
            .then(s1 => {

                jokeApi
                    .getAll()
                    .then(j1 => {
                        j1.forEach(jk => {
                            const filteredScores = s1.filter(score => score.joke === jk.id)
                            jk.scoreCount = filteredScores.length
                            const averageScore = (filteredScores.reduce((a,b) => a+b.score,0)/filteredScores.length).toFixed(1)
                            jk.averageScore = averageScore? averageScore:0
                        })
                        setJokes(j1)
                    })
                    .catch(error => console.warn(error))

                setScores(s1)
            })
            .catch(error => console.warn(error))


    }

    useEffect(initialLoad, [])

    const exposedValue = {
        jokes,
        scores,
        getJokeWithScores,
        addScore
    };
    return <Context.Provider value={exposedValue}>{children}</Context.Provider>;
}

export { Context, ProviderWrapper }


