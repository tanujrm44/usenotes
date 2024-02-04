import { notFound } from 'next/navigation';
import NoteEditForm from '@/components/EditNoteForm';
import Note from '@/models/notesModel';
import { connectToDB } from '@/db/db';

interface NoteEditPageProps {
    params: {
        id: string;
    };
}

export default async function NoteEditPage(props: NoteEditPageProps) {
    const { id } = props.params;
    connectToDB();
    const note = await Note.findById(id)

    if (!note) {
        return notFound();
    }

    return (
        <div>
            <NoteEditForm note={note} />
        </div>
    );
}
