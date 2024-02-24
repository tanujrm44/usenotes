import Link from 'next/link'
import React from 'react'

export default function Header() {
    return (
        <div className="bg-blue-500 p-4 text-white">
            <Link href="/">
                <div className="text-2xl font-bold">useNotes</div>
            </Link>
        </div>
    )
}
