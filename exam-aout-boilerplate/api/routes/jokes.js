const router = require('express').Router()
const Joke = require('../models/jokes')

router.get("/", (req, res) => {
    Joke.find({}).then(jokes => res.json(jokes))
})

router.get("/:id", (req, res) => {
    Joke.findById(req.params.id).then(joke => {
        res.json(joke)
    })
})

router.delete("/:id", (req,res) => {
    Joke.findByIdAndDelete(req.params.id).then(result => {
        res.json(result)
    })
})

router.post("/", (req,res,next) => {
    const body = req.body

    if (!body.question|| !body.answer || !body.category)
        return res.status(400).json({
            error: 'Missing required fields'
        });

    if (body.question.length < 4 || body.answer.length < 4 || body.category.length < 4)
        return res.status(400).json({
            error: 'question,answer and category must be at least 3 characters'
        })

    const joke = new Joke(body)
    joke.save().then(result => {
        res.json(result)
    })
})



module.exports = router

