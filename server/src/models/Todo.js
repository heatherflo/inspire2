import { Schema } from "mongoose"

export const TodoSchema = new Schema({

  description: { type: String, required: true }
})