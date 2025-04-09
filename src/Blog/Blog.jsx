import { FaBookmark } from "react-icons/fa";
function Blog({ blog, handleBookmark, deleteBookmark }) {
    const handleClick = () => {
        handleBookmark(blog);
    };

    const handleDelete = () => {
        deleteBookmark(blog.id, blog.reading_time);
    };
    return (
        <>
            <div className="border-2 border-gray-400 rounded-lg shadow-lg">
                <div>
                    <img
                        className="h-96 object-fit w-full"
                        src={blog.cover}
                        alt="cover pic"
                    />
                    <div className="mt-5 flex justify-between lg:px-4">
                        <div className="flex justify-center items-center space-x-5">
                            <img
                                className="h-12 w-12"
                                src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                                alt="icon"
                            />
                            <div>
                                <h3 className="font-bold text-xl">{blog.author}</h3>
                                <p className="text-lg font-medium">{blog.posted_date}</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center lg:space-x-4">
                            <p>{blog.reading_time} min read</p>
                            <FaBookmark onClick={handleClick} className="h-6 w-6" />
                        </div>
                    </div>
                    <div className="px-4 mt-5 mb-5 space-y-3">
                        <h1 className="text-2xl font-bold">{blog.title}</h1>
                        <div className="flex gap-2">
                            {blog.hashtags.map((hashtag) => {
                                return (
                                    <p className="text-xl font-medium" key={hashtag}>
                                        #{hashtag}
                                    </p>
                                );
                            })}
                        </div>
                        <button
                            onClick={handleDelete}
                            className=" text-blue-600 border-b-2 border-blue-600 text-xl"
                            href=""
                        >
                            Mark as read
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Blog;
