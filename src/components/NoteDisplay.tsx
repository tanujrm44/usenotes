'use client'

import React from 'react'
import * as actions from '@/actions'
import { redirect } from 'next/navigation'

interface NoteProps {
    title: string
    content: string
    id: string
}

const NoteDisplay: React.FC<NoteProps> = ({ title, content, id }) => {
    async function deleteNoteHandler(e: React.FormEvent) {
        actions.deleteNote(id.toString())
    }
    return (
        <>
            <form onSubmit={deleteNoteHandler}>
                <button className="bg-red-500 text-white px-4 py-2 rounded mb-4">Delete</button>
            </form>
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <p className="text-gray-600">{content}</p>
        </>
    )
}

export default NoteDisplay
