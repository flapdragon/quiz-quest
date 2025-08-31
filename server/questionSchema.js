import mongoose from "mongoose"

const Schema = mongoose.Schema

const questionSchema = new Schema({
    quizType: String,
    tags: [],
    questionText: String,
    options: [],
    answers: [],
    source: String
})

export default questionSchema
