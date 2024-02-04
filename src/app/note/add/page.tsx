import { connectToDB } from '@/db/db';
import Note from '@/models/notesModel'
import { redirect } from 'next/navigation';

const AddNote: React.FC = () => {
    async function createNote(formData: FormData) {
        'use server'
        const title = formData.get('title')
        const content = formData.get('content')

        connectToDB()
        await Note.create({ title, content })

        redirect('/');
    }

    return (
        <div className="my-4 p-4 bg-gray-100 rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-4">Add Note</h2>
            <form action={createNote} >
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    className="w-full p-2 mb-4 border rounded-md"
                />

                <textarea
                    placeholder="Content"
                    name="content"
                    className="w-full p-2 mb-4 border rounded-md resize-none"
                    rows={4}
                ></textarea>

                <button
                    className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                    type='submit'
                >
                    Add Note
                </button>
            </form>
        </div>
    );
};

export default AddNote;
