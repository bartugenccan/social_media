import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { likeTweet } from "../store/tweets";

const TweetCard = () => {
  const tweets = useSelector((state) => state.tweets.list);
  const dispatch = useDispatch();

  return (
    <>
      {tweets.map((tweet) => (
        <div key={tweet.id} className="bg-white rounded-xl w-1/3 p-5 mx-auto">
          <div>
            <h1 className="p-2">{tweet.author}</h1>
          </div>
          <hr />
          <h2 className="p-2">{tweet.message}</h2>
          <img src={tweet.image} alt="" className="mt-5 p-2" />
          <div className="p-2 flex items-center">
            <FontAwesomeIcon
              icon={faHeart}
              cursor="pointer"
              onClick={() => dispatch(likeTweet(tweet.likes))}
            />
            <p className="px-2">{tweet.likes.length}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default TweetCard;
