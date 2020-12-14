import React from "react";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";
import "./Widgets.css";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>Trends for you</h2>

        <TwitterTweetEmbed tweetId={"1322805869340360704"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="Nazmulho71"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://web.facebook.com/mdnazmulho71/"}
          options={{ text: "#reactjs is awesome", via: "Nazmulho71" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
