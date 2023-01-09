import mongoose from 'mongoose'

const Schema = mongoose.Schema
	
const skillSchema = new Schema({
  text: String,
  obtained: Boolean,
  progress: Number
})

const Skill = mongoose.model('Skill', skillSchema)

export {
  Skill
}