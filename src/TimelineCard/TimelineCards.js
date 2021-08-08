import React from "react";
import "./timelinecardstyle.css";
import ThumbDownAltIcon from "@material-ui/icons/ThumbDownAlt";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import AddCommentIcon from "@material-ui/icons/AddComment";
function TimelineCards() {
  return (
    <div className="timeline-card">
      <div className="card-header">
        <div className="profile-picture"></div>
        <div className="card-title"></div>
      </div>
      <div className="timeline-card-content"></div>
      <div className="timeline-card-footer">
        <ThumbUpIcon />
        <ThumbDownAltIcon />
        <AddCommentIcon />
      </div>
    </div>
  );
}

export default TimelineCards;
