import "dotenv/config"
import axios from "axios"
import { data } from "./question.data.js"

console.log(data[17])

try {
  const response = await axios.post(`http://localhost:${process.env.SERVER_PORT}/questions`, data[17])
  console.log(response)
}
catch (err) {
  console.log(err)
}