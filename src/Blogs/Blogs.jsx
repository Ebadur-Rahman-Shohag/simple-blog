import React from "react";

import Blog from "../Blog/Blog";

function Blogs() {
    return (
        <>
            <div className="container mx-auto mt-10">
                <h1 className="mb-5 text-3xl font-bold text-center">Blogs : 4</h1>
                {/* container */}
                <div className="w-full flex gap-5 py-6">
                    {/* left side */}
                    <div className="w-[70%]  space-y-5">
                        <Blog />
                        <Blog />
                        <Blog />
                    </div>
                    {/* right side */}
                    <div className="w-[30%]  bg-gray-100 rounded-md flex  items-center flex-col space-y-5">
                        <h1 className="mt-8 text-2xl font-bold">Reading Time : 5</h1>
                        <h1 className="text-2xl font-bold">Bookmarked Blogs : 4</h1>

                        <div className="bg-white px-10 py-8 rounded-lg shadow-lg">
                            <p>JavaScript Object for Beginners</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Blogs;
