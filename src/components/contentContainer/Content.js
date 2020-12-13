import Facade from "./facade/Facade";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import style from "./Content.module.scss";
import UserPost from "./userPost/UserPost";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const Content = () => {
  return (
    <Grid container spacing={3} className={style.content}>
      <Grid item xs={3}>
        <div className={style.content__allContentTile}>
          <label>{"All Content"}</label>
        </div>
      </Grid>
      <Grid item xs={8}>
        <UserPost />
      </Grid>
      <Grid item xs={3}>
        <Card className={style.root}>
          <CardContent>
            <Typography
              className={style.content_myTopicsTitle}
              color="textSecondary"
              gutterBottom
            >
              Word of the Day
            </Typography>
            <Typography color="textSecondary">
              adjective
            </Typography>
            <Typography variant="body2" component="p">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={3}>
        <Paper className={style.paper}>xs=3</Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper className={style.paper}>xs=3</Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper className={style.paper}>xs=3</Paper>
      </Grid>
    </Grid>
  );
};
export default Content;
