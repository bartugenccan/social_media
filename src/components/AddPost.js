import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../store/tweets";

const AddPost = () => {
  const [postInput, setPostInput] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addPost({
        id: 3,
        author: "bartu",
        image:
          "https://www.alastyr.com/blog/wp-content/uploads/2021/09/react-nedir.png",
        message: postInput,
        likes: [],
        comments: [],
      })
    );
    setPostInput("");
  };

  return (
    <>
      <form
        className="flex items-center justify-center"
        onSubmit={handleSubmit}
      >
        <div className="mb-4 w-1/3 bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
          <div className="py-2 px-4 bg-white rounded-t-lg dark:bg-gray-800">
            <label htmlFor="comment" className="sr-only">
              Your post
            </label>
            <textarea
              id="comment"
              rows="4"
              className="px-0 w-full text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
              placeholder="Write a post..."
              required=""
              value={postInput}
              onChange={(e) => setPostInput(e.target.value)}
            ></textarea>
          </div>
          <div className="flex justify-between items-center py-2 px-3 border-t dark:border-gray-600">
            <button
              type="submit"
              className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
            >
              Post Tweet
            </button>
            <div className="flex pl-0 space-x-1 sm:pl-2">
              <button
                type="button"
                className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddPost;
