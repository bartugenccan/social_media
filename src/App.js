import React from "react";
import { useSelector } from "react-redux";

// components
import Feed from "./components/Feed";

const App = () => {
  const tweets = useSelector((state) => state.tweets.list);
  console.log(tweets);

  return (
    <div>
      <Feed tweets={tweets} />
    </div>
  );
};

export default App;
