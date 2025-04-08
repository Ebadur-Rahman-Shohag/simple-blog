import React from 'react'
import { FaBookmark } from "react-icons/fa";
function Blog() {
    return (
        <>
            <div className="border-2 border-gray-400">
                <div>
                    <img
                        className="h-96 object-cover w-full"
                        src="https://images.unsplash.com/photo-1743074745121-235a12c74889?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                    />
                    <div className="mt-5 flex justify-between lg:px-4">
                        <div className="flex justify-center items-center space-x-5">
                            <img
                                className="h-12 w-12"
                                src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                                alt="icon"
                            />
                            <div>
                                <h3 className="font-bold text-xl">Hamza Sohail</h3>
                                <p className="text-lg font-medium">September 15, 2025</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center lg:space-x-4">
                            <p>5 min read</p>
                            <FaBookmark className="h-6 w-6" />
                        </div>
                    </div>
                    <div className="px-4 mt-5 mb-5 space-y-3">
                        <h1 className="text-2xl font-bold">Top Ten ES6 Features You Know</h1>
                        <div className="flex gap-2">
                            <p>#beginners</p>
                            <p>#es6</p>
                        </div>
                        <a className=" text-blue-600 border-b-2 border-blue-600 text-xl" href="">Mark as read</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog