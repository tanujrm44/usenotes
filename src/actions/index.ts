"use server"

import { redirect } from "next/navigation"
import { connectToDB } from "@/db/db"
import Note from "@/models/notesModel"

export async function editNote(id: string, title: string, content: string) {
  await connectToDB()
  const updatedNote = await Note.findById(id.toString())
  updatedNote.title = title
  updatedNote.content = content
  await updatedNote.save()

  redirect("/")
}
