import React, { useState } from "react";
import { Avatar, Button } from "@material-ui/core";
import {
  ImageOutlined,
  Gif,
  ViewDayOutlined,
  EmojiEmotionsOutlined,
  InsertInvitationOutlined,
} from "@material-ui/icons";
import db from "./firebase";
import "./TweetBox.css";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "Md Nazmul Hossain",
      username: "Nazmulho71",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://pbs.twimg.com/profile_images/1275313891233247239/tmcbgfkb_400x400.jpg",
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://pbs.twimg.com/profile_images/1275313891233247239/tmcbgfkb_400x400.jpg" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          onChange={(e) => setTweetImage(e.target.value)}
          value={tweetImage}
          className="tweetBox__imageInput"
          placeholder="Enter image URL"
          type="text"
        />
        <h1 className="tweetBox__icons">
          <ImageOutlined style={{ padding: "5px" }} />
          <Gif style={{ padding: "5px" }} />
          <ViewDayOutlined style={{ padding: "5px" }} />
          <EmojiEmotionsOutlined style={{ padding: "5px" }} />
          <InsertInvitationOutlined style={{ padding: "5px" }} />
        </h1>
        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
