'use client';

import { useState } from 'react';
import * as actions from '@/actions';
import { redirect } from 'next/navigation';

interface NoteEditFormProps {
    note: {
        _id: string;
        title: string;
        content: string;
    }
}

export default function NoteEditForm({ note }: NoteEditFormProps) {
    const [title, setTitle] = useState(note.title);
    const [content, setContent] = useState(note.content);

    async function editNoteHandler(e: React.FormEvent) {
        e.preventDefault();
        actions.editNote(note._id.toString(), title, content)
    }

    return (
        <div>
            <form onSubmit={editNoteHandler}>
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="p-2 border rounded"
                />
                <textarea
                    name="content"
                    placeholder="Content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="p-2 border rounded"
                />
                <button type="submit" className="p-2 border rounded" onClick={editNoteHandler}>
                    Save
                </button>
            </form>
        </div>
    );
}
