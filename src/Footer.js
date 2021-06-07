import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/Mail';
import { Typography } from '@material-ui/core';
import {AppBar,Toolbar,Divider,ListItem} from '@material-ui/core';
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles({
  stickToBottom: {
    width: '100%',
    position: "fixed",
    left: "0",
    bottom: "0",
    background : '#FFFFFF',
    color:'#5D6D7E',
    textAlign:"left",
   
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between',
    float: 'right'
  },
  icon: {
    minWidth: '40px',
}

});

const menuItem = [
    {
      text: "LinkedIn",
      avatarIcon: <LinkedInIcon color="primary"/>,
      path: "https://www.linkedin.com/in/sreekrishnan-r-764a07138/"
    },
    {
      text: "Git",
      avatarIcon: <GitHubIcon color="primary"/>,
      path: "/Git"
    },
    {
        text: "Mail",
        avatarIcon: <MailIcon color="primary"/>,
        path :"/Mail"
      }
  ];

function Footer() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
//     <React.Fragment>
//     <Typography>sree</Typography>
//     <BottomNavigation className={classes.stickToBottom} showLabels>
    
//      {menuItem.map((menu) => (

// <BottomNavigationAction label={menu.text}  icon={menu.avatarIcon} />

// ))}  

//     </BottomNavigation>
//     </React.Fragment>
<AppBar position="static"  className={classes.stickToBottom}  elevation={2}>
          <Container >
            <Toolbar>
            <Box display='flex' flexGrow={1}>
            <Typography  className={classes.content} >
              © Sreekrishnan 2021 | Developer | sreekrishnanvasudevapuri@gmail.com
              </Typography>
            </Box>
                  {menuItem.map((menu) => (
                          <Icon className={classes.icon}>{ menu.avatarIcon }</Icon>   
                  ))} 
              
            </Toolbar>
          </Container>
        </AppBar>

  );
}


export  {Footer}