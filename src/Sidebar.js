import React from "react";
import { Button } from "@material-ui/core";
import {
  Twitter,
  HomeRounded,
  SearchRounded,
  NotificationsNoneRounded,
  MailOutlineRounded,
  BookmarkBorderRounded,
  ListAltRounded,
  PermIdentityRounded,
  MoreHorizRounded,
} from "@material-ui/icons";
import SidebarOption from "./SidebarOption";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <Twitter className="sidebar__twitterIcon" />

      <SidebarOption active Icon={HomeRounded} text="Home" />
      <SidebarOption Icon={SearchRounded} text="Explore" />
      <SidebarOption Icon={NotificationsNoneRounded} text="Notifications" />
      <SidebarOption Icon={MailOutlineRounded} text="Messages" />
      <SidebarOption Icon={BookmarkBorderRounded} text="Bookmarks" />
      <SidebarOption Icon={ListAltRounded} text="Lists" />
      <SidebarOption Icon={PermIdentityRounded} text="Profile" />
      <SidebarOption Icon={MoreHorizRounded} text="More" />

      <Button variant="outlined" className="sidebar__tweet">
        Tweet
      </Button>
    </div>
  );
}

export default Sidebar;
