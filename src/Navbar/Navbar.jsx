import React from 'react'

function Navbar() {
    return (
        <>
            <nav className='container mx-auto bg-gray-100 border-b-2 border-gray-400 rounded-lg flex flex-col lg:flex-row lg:justify-between items-center gap-5 lg:gap-0 py-8 lg:px-6'>
                <h1 className='text-3xl font-bold'>Knowledge Cafe</h1>
                <div>
                    <img className='h-12 w-12' src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="icon" />
                </div>
            </nav>
        </>
    )
}

export default Navbar