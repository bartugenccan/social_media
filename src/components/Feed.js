import React, { useEffect, useState } from "react";
import axios from "axios";

// components
import TweetCard from "./TweetCard";
import AddPost from "./AddPost";

const Feed = () => {
  return (
    <div className="flex flex-col">
      <AddPost />
      <div className="grid grid-flow-row gap-4">
        <TweetCard/>
      </div>
    </div>
  );
};

export default Feed;
