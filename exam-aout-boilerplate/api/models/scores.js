const mongoose = require('mongoose')
const {ObjectId} = require("mongodb");



// Define Schema
const scoresSchema = new mongoose.Schema({
    username: String,
    date: Date,
    score: Number,
    joke: ObjectId
})

scoresSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})



// Export model
module.exports = mongoose.model('Scores', scoresSchema)
