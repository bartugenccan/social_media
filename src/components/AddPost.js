import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../store/tweets";
import uuid from "react-uuid";

const AddPost = () => {
  const [postInput, setPostInput] = useState("");

  const [imagePreview, setImagePreview] = useState(null);
  const [error, setError] = useState(false);

  const dispatch = useDispatch();
  const username = useSelector((state) => state.tweets.username);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addPost({
        id: uuid(),
        author: username,
        image: imagePreview,
        message: postInput,
        likes: [],
        comments: [],
      })
    );
    setPostInput("");
    setImagePreview(null);
  };

  const handleImageChange = (e) => {
    const selected = e.target.files[0];
    const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/jpg"];

    if (selected && ALLOWED_TYPES.includes(selected.type)) {
      let reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(selected);
    } else {
      setError(true);
    }
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
              {!imagePreview ? (
                <label htmlFor="image">
                  <svg
                    type="button"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    cursor="pointer"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <input
                    type="file"
                    id="image"
                    onChange={handleImageChange}
                    hidden
                  />
                </label>
              ) : (
                <div className="flex items-center justify-center gap-3">
                  <img src={imagePreview} width={150} />
                  <button
                    onClick={() => setImagePreview(null)}
                    type="button"
                    className="mt-1 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  >
                    X
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddPost;
