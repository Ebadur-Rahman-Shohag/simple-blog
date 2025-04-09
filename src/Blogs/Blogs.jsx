import React, { use } from "react";

import Blog from "../Blog/Blog";
import Bookmarks from "../Bookmarks/Bookmarks";

function Blogs({ blogs, handleBookmark, bookmarks, deleteBookmark, readingTime }) {
    const blogsData = use(blogs);

    return (
        <>
            <div className="container mx-auto mt-10">
                <h1 className="mb-5 text-3xl font-bold text-center">Blogs : {blogsData.length}</h1>
                {/* container */}
                <div className="w-full flex gap-5 py-6">
                    {/* left side */}
                    <div className="w-[70%]  space-y-5">
                        {blogsData.map((blog) => {
                            return <Blog key={blog.id} handleBookmark={handleBookmark} deleteBookmark={deleteBookmark} blog={blog} />;
                        })}
                    </div>
                    {/* right side */}
                    <Bookmarks bookmarks={bookmarks} readingTime={readingTime} />
                </div>
            </div>
        </>
    );
}

export default Blogs;
