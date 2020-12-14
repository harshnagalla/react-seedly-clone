import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import style from "./UserPost.module.scss";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";

const UserPost = ({ fullName, answer, time }) => {
  return (
    <Card className={style.userPost}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={style.userPost__avatar}>
            {fullName.charAt(0)}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={fullName}
        subheader={"Answered " + time}
      />

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {answer}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <ChatBubbleOutlineIcon />
          <label>{"0"}</label>
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton aria-label="add to favorites">
          <BookmarkBorderIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default UserPost;
