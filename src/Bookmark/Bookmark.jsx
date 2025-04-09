import React from "react";

function Bookmark({ bookmarks }) {
    console.log(bookmarks);
    return (
        <>
            <div className="space-y-5 px-4">
                {bookmarks.map(bookmark => {
                    return bookmark ? <p className="bg-white px-10 py-8 rounded-lg shadow-lg text-lg font-medium" key={bookmark.id}>{bookmark.title}</p> : ""
                })}
            </div>
        </>
    );
}

export default Bookmark;
