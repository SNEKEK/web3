const Score = require("../models/scores");
const Joke = require("../models/jokes")
const router = require('express').Router()

router.get("/", (req, res) => {
    Score.find({}).then(scores => res.json(scores))
})

router.post("/", (req,res,next) => {
    const body = req.body

    if (!body.username || !body.score || !body.joke)
        return res.status(400).json({
            error: 'Missing required fields'
        });

    if (body.score < 0 || body.score > 10)
        return res.status(400).json({
            error: 'Missing required fields'
        });

    Joke.findById(body.joke).then(joke => {
        if (joke === null) {
            return res.status(400).json({
                error: 'invalid joke id'
            });
        }
    })
    if (body.username.length < 4)
        return res.status(400).json({
            error: 'username too short'
        })

    Score.find({ username: body.username, joke: body.joke }).then( score => {
        console.log(score)
        if (score.length > 0) {
            return res.status(400).json({
                error: 'this person already scored this joke'
            })
        }
    })

    const score = new Score({
        username: body.username,
        date: Date.now(),
        score: body.score,
        joke: body.joke
    });
    score.save().then(result => {
        res.json(result)
    })
})

module.exports = router