import React, { forwardRef } from "react";
import { Avatar } from "@material-ui/core";
import {
  VerifiedUser,
  ChatBubbleOutlineRounded,
  RepeatRounded,
  FavoriteBorderRounded,
  PublishRounded,
  EqualizerRounded,
} from "@material-ui/icons";
import "./Post.css";

const Post = forwardRef(
  ({ displayName, username, verified, text, image, avatar }, ref) => {
    return (
      <div className="post" ref={ref}>
        <Avatar className="post__avatarr" src={avatar} />
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                {displayName}{" "}
                <span className="post__headerSpecial">
                  {verified && <VerifiedUser className="post__badge" />} @
                  {username}
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>{text}</p>
            </div>
          </div>
          <img src={image} alt="" />
          <div className="post__footer">
            <ChatBubbleOutlineRounded fontSize="small" />
            <RepeatRounded fontSize="small" />
            <FavoriteBorderRounded fontSize="small" />
            <PublishRounded fontSize="small" />
            <EqualizerRounded fontSize="small" />
          </div>
        </div>
      </div>
    );
  }
);

export default Post;
