import "dotenv/config"
import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import questionCreate from "./questionCreate.js"

const app = express()
const port = process.env.PORT || 8000

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  res.send("Hello World!")
})

app.post("/questions", questionCreate)

try {
  const mongoURL = process.env.MONGODB_URL || ""
  await mongoose.connect(mongoURL)
  console.log(`Quiz Quest connected to database ${mongoURL}`)

  app.listen(port, () => {
    console.log(`Quiz Quest listening on port ${port}`)
  })
}
catch(err) {
  console.log(err)
}
