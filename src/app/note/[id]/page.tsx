import React from 'react';
import NoteDisplay from '@/components/NoteDisplay';
import { connectToDB } from '@/db/db';
import Note from '@/models/notesModel';

interface NoteViewPageProps {
    params: {
        id: string;
    };
}

const YourParentComponent = async (props: NoteViewPageProps) => {
    const { id } = props.params;
    connectToDB();
    const note = await Note.findById(id);

    return (
        <div>
            <NoteDisplay title={note.title} content={note.content} />
        </div>
    );
};

export default YourParentComponent;
