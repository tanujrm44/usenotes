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
        //<div>
        //    <form onSubmit={editNoteHandler}>
        //        <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
        //            <h2 className="text-2xl font-bold mb-4">Edit Note</h2>

        //            {/* Title Input */}
        //            <input
        //                type="text"
        //                name="title"
        //                placeholder="Title"
        //                value={title}
        //                onChange={(e) => setTitle(e.target.value)}
        //                className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring focus:border-blue-300"
        //            />

        //            {/* Content Textarea */}
        //            <textarea
        //                name="content"
        //                placeholder="Content"
        //                value={content}
        //                onChange={(e) => setContent(e.target.value)}
        //                className="w-full p-2 mb-4 border rounded resize-none focus:outline-none focus:ring focus:border-blue-300"
        //                rows={4}
        //            ></textarea>

        //            {/* Save Button */}
        //            <button
        //                type="button"
        //                onClick={editNoteHandler}
        //                className="w-full p-2 border rounded bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        //            >
        //                Save
        //            </button>
        //        </div>
        //    </form>
        //</div>
        <div className="my-4 p-4 bg-gray-100 rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-4">Edit Note</h2>
            <form onSubmit={editNoteHandler}>
                <input
                    type="text"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                    className="w-full p-2 mb-4 border rounded-md"
                />

                <textarea
                    placeholder="Content"
                    name="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="w-full p-2 mb-4 border rounded-md resize-none"
                    rows={4}
                ></textarea>

                <button
                    className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                    type='submit'
                >
                    Save
                </button>
            </form>
        </div>
    );
}
