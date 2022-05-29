import React, { useEffect, useState } from "react";
import axios from "axios";

// components
import TweetCard from "./TweetCard";
import AddPost from "./AddPost";

const Feed = ({ tweets }) => {
  /*const getTweets = async () => {
    await axios("https://fake-tweets-api.herokuapp.com/posts")
      .then((resp) => {
        console.log(resp.data);
      })
      .catch((err) => console.error(err));
  };*/

  /*useEffect(() => {
    getTweets();
  }, []);*/

  return (
    <div className="flex flex-col">
      <AddPost />
      <div className="grid grid-flow-row gap-4">
        <TweetCard tweets={tweets} />
      </div>
    </div>
  );
};

export default Feed;
