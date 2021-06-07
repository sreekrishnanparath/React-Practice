import React from "react";
import { personal } from "./Content";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { content } from "./Content";
import { Icon, Typography } from "@material-ui/core";
import propic from "./sreekrishnan_casual.jpg";
import { menuItem } from "./Content";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.primary,
    },
  })
);

function Profile() {
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={4}>
        <img src={propic} alt="logo" />
      </Grid>
        <Grid item xs={12} sm={8}>

          {personal.map((personal) => (
            <Paper className={classes.paper}>
              <Typography variant="h5" component="h5">
                {personal.title}
              </Typography>
              <Typography>{personal.description}</Typography>
              <Typography>{personal.contentLine1}</Typography>
              <Typography>{personal.contentLine2}</Typography>
              <Typography>{personal.contentLine3}</Typography>
            </Paper>
          ))}
        </Grid>
    </Grid>
  );
}

export { Profile };
