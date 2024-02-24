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

export async function deleteNote(id: string) {
  await connectToDB()
  await Note.findByIdAndDelete(id.toString())

  redirect("/")
}

export async function createNote(
  formState: { message: string },
  formData: FormData
) {
  const title = formData.get("title")
  const content = formData.get("content")

  if (!title) {
    return {
      message: "Title is required",
    }
  }
  if (!content) {
    return {
      message: "Content is required",
    }
  }

  connectToDB()
  await Note.create({ title, content })

  redirect("/")
}
