import { redirect } from 'next/navigation';
import React from 'react'

export default function page() {

  interface TitleTypes {
    id: string;
    title: string;
  }

  const titles: TitleTypes[] = [
    { id: "1", title: 'Title 1' },
    { id: "2", title: 'Title 2' },
    { id: "3", title: 'Title 3' },
  ];

  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Notes</h2>
      <ul>
        {titles.map((item) => (
          <li key={item.id} className="flex items-center justify-between bg-gray-100 shadow-md rounded-md p-4 mb-4 cursor-pointer md:w-1/2">
            <span className="text-lg">{item.title}</span>
            <div className="space-x-2">
              <button
                className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
              //onClick={() => redirect(`/note/${item.id}/edit`)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:border-red-300"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
