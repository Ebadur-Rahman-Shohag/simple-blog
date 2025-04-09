import { useState } from "react";
import "./App.css";
import Blogs from "./Blogs/Blogs";
import Navbar from "./Navbar/Navbar";

const blogsPromises = fetch("blogs.json").then((res) => res.json());
function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleBookmark = (blog) => {
    setBookmarks((prevBookmarks) => [...prevBookmarks, blog]);
  };


  const deleteBookmark = (id, reading_time) => {
    setReadingTime(readingTime + reading_time);
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmarks);
  }
  console.log(bookmarks)
  // console.log(bookmarks);

  return (
    <>
      <Navbar />
      <Blogs
        blogs={blogsPromises}
        handleBookmark={handleBookmark}
        bookmarks={bookmarks}
        deleteBookmark={deleteBookmark}
        readingTime={readingTime}
      />
    </>
  );
}

export default App;
