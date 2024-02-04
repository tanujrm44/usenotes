import mongoose, { Document } from "mongoose"

interface NoteDocument extends Document {
  title: string
  content: string
}

const notesSchema = new mongoose.Schema({
  title: String,
  content: String,
})

const Note =
  mongoose.models.Note || mongoose.model<NoteDocument>("Note", notesSchema)

export default Note
