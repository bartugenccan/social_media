import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTweets } from "./store/tweets";

// components
import Feed from "./components/Feed";
import GetUsername from "./components/GetUsername";

const App = () => {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.tweets.username);

  useEffect(() => {
    dispatch(fetchTweets());
  }, []);

  return (
    <>
      {username !== "" ? (
        <Feed />
      ) : (
        <div className="w-1/2 mt-5 mx-auto">
          <GetUsername />
        </div>
      )}
    </>
  );
};

export default App;
