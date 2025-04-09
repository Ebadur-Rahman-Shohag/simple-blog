import React from "react";
import Bookmark from "../Bookmark/Bookmark";

function Bookmarks({ bookmarks, deleteBookmark, readingTime }) {
    return (
        <>
            <div className="w-[30%]  bg-gray-100 rounded-md flex  items-center flex-col space-y-5">
                <h1 className="mt-8 text-2xl font-bold">Reading Time : {readingTime}</h1>
                <h1 className="text-2xl font-bold">Bookmarked Blogs : {bookmarks.length}</h1>
                <Bookmark bookmarks={bookmarks} deleteBookmark={deleteBookmark} />
            </div>
        </>
    );
}

export default Bookmarks;
