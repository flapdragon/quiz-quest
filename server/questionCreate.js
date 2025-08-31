import questionModel from "./questionModel.js"

const questionCreate = async (req, res) => {
  const {
    quizType,
    tags,
    questionText,
    options,
    answers,
    source
  } = req.body

  const question = await questionModel.create({
    quizType,
    tags,
    questionText,
    options,
    answers,
    source
  })

  res.status(200).json({ success: true, question: question })
}

export default questionCreate
