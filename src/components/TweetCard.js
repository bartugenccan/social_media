import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const TweetCard = ({ tweets }) => {
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
            <FontAwesomeIcon icon={faHeart} />
            <p className="px-2">{tweet.likes.length}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default TweetCard;
