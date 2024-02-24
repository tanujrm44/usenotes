import { connectToDB } from '@/db/db';
import { redirect } from 'next/navigation';
import Notes from '@/models/notesModel'
import React from 'react'
import Link from 'next/link'

export default async function page() {
  connectToDB()
  const notes = await Notes.find()

  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Notes</h2>
      <Link href="/note/add">
        <button
          className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          type='submit'
        >
          Add Note
        </button>
      </Link>
      <ul>
        {notes?.map((item) => (
          <li className="flex items-center justify-between bg-gray-100 shadow-md rounded-md p-4 mb-4 cursor-pointer md:w-1/2">
            <span className="text-lg">{item.title}</span>
            <div className="space-x-2">
              <Link href={`/note/${item._id}/edit`}>
                <button
                  className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                >
                  Edit
                </button>
              </Link>
              <button
                className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:border-red-300"
              >
                Delete
              </button>
              <Link href={`/note/${item._id}`}>
                <button
                  className="bg-gray-500 text-white px-3 py-1 rounded-md hover:bg-gray-600 focus:outline-none focus:ring focus:border-gray-300"
                >
                  View
                </button>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
