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


const useStyles = makeStyles({
  root: {
    width: '100%'
    
  },
});

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

function Footer() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation>
     
     {menuItem.map((menu) => (

<BottomNavigationAction label={menu.text}  icon={menu.avatarIcon} />

))}  

    </BottomNavigation>
    
  );
}


export  {Footer}