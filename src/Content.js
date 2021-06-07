import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/Mail';


const content = [
    
    {
title : "Van Market",
description : `The backbone behind our van sales software is the direct store delivery model, which allows retail businesses to reduce their operating cost by directly taking care of the whole distribution. This method is most commonly used by industries like Food and beverages since they have a high priority for delivering fresh products.

Our van sales software provides everything a modern UAE business needs to thrive. Our solution comes with real-time alerts, route planning, trend analysis, and photo-taking, etc and will enable your employees to plan the delivery route, manage van performance, keep track of stock, and manage sales.`
},
{
    title : "Smart Staff",
    description : "Staff Attendance System"
    }

]

const personal =[
{
title : "Sreekrishnan Radhaksrishnan",
description: `Full Stack Software Developer`, 
contentLine1 : `Technology has the ability to influence so many lives has always inspired me. Thats why I am here! 👋 `,
contentLine2 : `that`,
contentLine3 : `them`,
}

]

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


export {content,personal,menuItem}