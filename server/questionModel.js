import mongoose from "mongoose"
import questionSchema from "./questionSchema.js"

questionSchema.set("toJSON", {
  transform: (doc, ret, options) => {
    ret.id = ret._id
    delete ret._id
    delete ret._v
    // ret.date = new Intl.DateTimeFormat('en-US').format(new Date())
  }
})

const questionModel = mongoose.model("questions", questionSchema)

export default questionModel