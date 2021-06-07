import React from "react";
import { personal } from "./Content";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { content } from "./Content";
import { Icon, Typography,List,ListItem } from "@material-ui/core";
import propic from "./sreekrishnan_casual.jpg";
import { menuItem } from "./Content";
import "font-awesome/css/font-awesome.css";

import ReactLogo from './atom.svg';
import AngularLogo from './angularjs.svg';
import CssLogo from './css.svg';
import DatabaseLogo from './database.svg';
import HtmlLogo from './html.svg';
import NodeLogo from './nodejs.svg';
import JavaLogo from './java.svg';
import SpringLogo from './spring.svg';
import SqlLogo from './sql.svg';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "left",
      color: theme.palette.text.primary,
    },
    title:{
      padding: theme.spacing(3),
      fontSize: 50,
      fontFamily: 'SuezOne',
      fontWeight: 'black',
    },
    description:{
      paddingLeft: theme.spacing(3),
    },
    content:{
      padding: theme.spacing(3),
    }
  })
);





function Profile() {
  const classes = useStyles();

  return (
    <React.Fragment>
    <Grid container spacing={3}>
      
        <Grid item xs={12} sm={8}>

          {personal.map((personal) => (
            <Paper className={classes.paper} elevation={0}>
              <Typography variant="h4" component="h5" className={classes.title}>
                {personal.title}
              </Typography>
              <Typography variant="h5" className={classes.description}>{personal.description}</Typography>
              <Typography className={classes.content}>{personal.contentLine1}</Typography>
              {/* <Typography>{personal.contentLine2}</Typography>
              <Typography>{personal.contentLine3}</Typography> */}
              <List style={{ display: 'flex', flexDirection: 'row', padding: 0 }}>
            <ListItem ><img src={HtmlLogo} alt="React Logo" style={{ height: 53, width: 36 }}/></ListItem>
            <ListItem > <img src={CssLogo} alt="React Logo" style={{ height: 53, width: 36 }}/></ListItem>
            <ListItem > <img src={AngularLogo} alt="React Logo" style={{ height: 53, width: 36 }}/></ListItem>
            <ListItem > <img src={ReactLogo} alt="React Logo" style={{ height: 53, width: 36 }}/></ListItem>
        </List>
        <List style={{ display: 'flex', flexDirection: 'row', padding: 0 }}>
            <ListItem ><img src={NodeLogo} alt="React Logo" style={{ height: 53, width: 36 }}/></ListItem>
            <ListItem > <img src={SpringLogo} alt="React Logo" style={{ height: 53, width: 36 }}/></ListItem>
            <ListItem > <img src={SqlLogo} alt="React Logo" style={{ height: 53, width: 36 }}/></ListItem>
            <ListItem > <img src={DatabaseLogo} alt="React Logo" style={{ height: 53, width: 36 }}/></ListItem>
        </List>

            </Paper>
          ))}
        </Grid>
        <Grid item xs={12} sm={4}>
        <img src={propic} alt="logo" />
      </Grid>
    </Grid>
   
    </React.Fragment>
  );
}

export { Profile };
