import React from 'react';
import {AppBar,Toolbar,Divider,ListItem} from '@material-ui/core';
import PropTypes from 'prop-types';
import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Icon from "@material-ui/core/Icon";
import {Works} from './Works'
import {Profile} from './Profile'



const menuItem = [
    {
      text: "LinkedIn",
      avatarIcon: <LinkedInIcon color="primary"/>,
      path: "/Linked"
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

const drawerWidth = 240;

const appBarStyle = {
    background : '#FFFFFF'
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    
    menuButton: {
      marginRight: 36,
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1,
      },
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    typography:{
        color:'#5D6D7E'
    }
  }),
);



const Header=()=>{

    const classes = useStyles()
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const iconList = [LinkedInIcon, GitHubIcon,MailIcon]

    return (
        <div className={classes.root}>
          <CssBaseline />
          <AppBar style={appBarStyle}
            position="fixed"
            className={clsx(classes.appBar, {
              [classes.appBarShift]: open,
            })}
          >
            <Toolbar>             
              <Typography variant="h6" noWrap className={clsx(classes.typography)}>
                Sreekrishnan Radhakrishnan hi
              </Typography>
          

              {/* {menuItem.map((menu)=>(
                  <Typography label={menu.text}  icon={menu.avatarIcon} />

        )

        )} */}
            </Toolbar>
          </AppBar>
          {/* <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            })}
            classes={{
              paper: clsx({
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
              }),
            }}
          >
           
            <List>
            
              {menuItem.map((menu) => (
                <ListItem button key={menu.text}>               

                    <ListItemIcon> {menu.avatarIcon}</ListItemIcon>
                  
                  <ListItemText primary={menu.text} />
                </ListItem>
              ))}
            </List>
         
          </Drawer> */}
          <main className={classes.content}>
          <div className={classes.toolbar} />  
          <Profile/>
          <Works/>        
          </main>
        </div>
      );
}

export default Header;