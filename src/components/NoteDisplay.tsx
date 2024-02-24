import React from 'react'

interface NoteProps {
    title: string
    content: string
}

const NoteDisplay: React.FC<NoteProps> = ({ title, content }) => {
    return (
        <>
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <p className="text-gray-600">{content}</p>
        </>
    )
}

export default NoteDisplay
