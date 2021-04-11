// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import StyledLink from "../components/StyledLink";
// import Svg2 from '../images/svg2.svg';
// import Button from '@material-ui/core/Button';
// import { flexbox } from '@material-ui/system';

// import React from 'react';
// import Box from '@material-ui/core/Box';

// // export default function Display() {
// //   return (
// //     <div style={{ width: '100%' }}>
// //       <Box display="flex" p={1} bgcolor="background.paper">
// //         {"I'm a flexbox container!"}
// //       </Box>
// //     </div>
// //   );
// // }


// export default function AlignContent() {
//     return (
//       <div style={{ width: '100%' }}>
//         <Box
//           display="flex"
//           flexWrap="wrap"
//         //   alignContent="flex-start"
//           p={1}
//           m={1}
//           bgcolor="background.paper"
//           css={{ maxWidth: 500, height: 500 }}
//         >
//             <Box p={5} m={8} bgcolor="white">
            
//             </Box>
//           <Box p={11} m={10} bgcolor="grey.300">
//             <div className="para1">
//             Keep in touch. No lost people anymore.
            
//          Know when you last contacted someone. 



//           Reach out after time to catch up.


//         Get reminders for the people, who matter most.
//         </div>
            
//           </Box>
          
//          <Box p={11} m={10} alignContent="flex-end"  justifyContent="flex-end" bgcolor="grey.300">
//             Item 2
//           </Box>
//           <Box p={5} m={8} bgcolor="white">
            
//             </Box>

//         </Box>
//         <Box
//           display="flex"
//           flexWrap="wrap"
//           justifyContent="flex-end"
//           alignContent="flex-end"
//           p={1}
//           m={1}
//           bgcolor="background.paper"
//           css={{ maxWidth: 300, height: 200 }}
//         >
//           {/* <Box p={1} bgcolor="grey.300">
//             Item 1
//           </Box>
//           <Box p={1} bgcolor="grey.300">
//             Item 2
//           </Box>
//           <Box p={1} bgcolor="grey.300">
//             Item 3
//           </Box>
//           <Box p={1} bgcolor="grey.300">
//             Item 4
//           </Box> */}
//           <Box p={1} bgcolor="grey.300">
//             Item 5
//           </Box>
//           <Box p={1} bgcolor="grey.300">
//             Item 6
//           </Box>
//           <Box p={1} bgcolor="grey.300">
//             Item 7
//           </Box>
//         </Box>
//       </div>
//     );
//   }



  import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
 import DoneIcon from '@material-ui/icons/Done';
 import Typography from '@material-ui/core/Typography';
 import Box from '@material-ui/core/Box';
// import CheckTwoToneIcon from '@material-ui/icons/CheckTwoTone';
import Social from "./Social.svg";
import Mind from "./mind.svg";
import Media from "./media.svg";
import Privacy1 from "./privacy1.svg";
import Network from "./network.svg";
import Statistics from "./statistics.svg";
import Button from '@material-ui/core/Button';
import { motion } from "framer-motion";
const Birthday = './birthday.jpeg';


import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';
// import shadows from '@material-ui/core/styles/shadows';


const theme = createMuiTheme();

theme.typography.h5 = {
    fontSize: '0.5rem',

    '@media (min-width:600px)': {
      fontSize: '1.5rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1rem',
    },
  };




const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 3,
    margin:'5vw',
   
    zIndex:'200',
    position: 'relative',
    overflow: 'hidden',
     boxShadow: '0 0 0 white',
  },
  paper: {
    padding: theme.spacing(4),
    textAlign: 'left',
    boxShadow: '0 0 0 white',
   
    background:'white',
    // color: theme.palette.text.secondary,
    height: 'auto',
    
  },
  reach:{
    color: "black",
    fontSize:15,
    float: "right"
      
  },
  bold:{
    color: "black",
    fontSize:20,
    float: "right",
    font_weight:900
      
  },
  svg1:{
    transform: "scale(0.3)",
    top:0,
    margin: 0,
    width: 128,
    height: 128,
    padding: 10

  },
  stat:{
    transform: "scale(0.3)",
    top:0,
    margin: '-10vh',
    width: 128,
    height: 128,
    padding:0

  }


}));



const message = `Truncation should be conditionally applicable on this long line of text
 as this is a much longer line than what the container can support. `;

export default function CenteredGrid() {
  const classes = useStyles();
 
   return (
       <>
        <div className="column is-8 is-offset-2">
            <motion.h1
              className="title has-text-weight-bold is-1 is-size-2-mobile is-spaced"
              layoutId="title"
            >
              <div>WHY US?</div>
            </motion.h1>
          </div>
    <div className={classes.root}>
      <Grid container spacing={6}>
      <Grid item xs={12} sm={6} lg={4}>
      <Paper className={classes.paper}>
     
     <Grid>

      <Box
        display="flex"
        flexWrap="nowrap"
        alignContent="flex-start"
    
        p={0.5}
        m={0.5}
        bgcolor="background.paper"
        css={{ maxWidth: 150, height: 100 }}
      >
        {/* <Box p={0.5} bgcolor="grey.300"> */}
        {/* <DoneIcon > </DoneIcon> */}
        {/* <FontAwesomeIcon icon={faCoffee} /> */}
        {/* <i className= 'fas fa-check fa-2x' style={ {float:"left"}} /> */}
        {/* </Box> */}
        &nbsp; &nbsp;
    
        <div className={classes.bold}>
        Keep in touch. No lost people anymore.
            </div>
        
        </Box>

          

          <Box
        display="flex"
        flexWrap="nowrap"
        alignContent="flex-start"
        p={0.5}
        m={0.5}
        bgcolor="background.paper"
        css={{ maxWidth: 150, height: 100 }}
      >
        {/* <Box p={0.5} bgcolor="grey.300"> */}
        {/* <DoneIcon > </DoneIcon> */}
        {/* <FontAwesomeIcon icon={faCoffee} /> */}
        <i className= 'fas fa-check' style={ {float:"left"}} />
        {/* </Box> */}
        &nbsp; &nbsp;
    
        <div className={classes.reach}>
            Reach out after time to catch up.
            </div>
        
        </Box>

        
        <Box
        display="flex"
        flexWrap="nowrap"
        alignContent="flex-start"
        p={0.5}
        m={0.5}
        bgcolor="background.paper"
        css={{ maxWidth: 150, height: 100 }}
      >
        {/* <Box p={0.5} bgcolor="grey.300"> */}
        {/* <DoneIcon > </DoneIcon> */}
        {/* <FontAwesomeIcon icon={faCoffee} /> */}
        <i className= 'fas fa-check' style={ {float:"left"}} />
        {/* </Box> */}
        &nbsp; &nbsp;
    
        <div className={classes.reach}>
        Know when you last contacted someone.
            </div>
        
        </Box>

        <Box
        display="flex"
        flexWrap="nowrap"
        alignContent="flex-start"
        p={0.5}
        m={0.5}
        bgcolor="background.paper"
        css={{ maxWidth: 150, height: 100 }}
      >
        {/* <Box p={0.5} bgcolor="grey.300"> */}
        {/* <DoneIcon > </DoneIcon> */}
        {/* <FontAwesomeIcon icon={faCoffee} /> */}
        <i className= 'fas fa-check' style={ {float:"left"}} />
        {/* </Box> */}
        &nbsp; &nbsp;
    
        <div className={classes.reach}>
        
        Get reminders for the people, who matter most.
        
            </div>
        
        </Box>




    </Grid>
    
          
           
        
         </Paper>
          
        </Grid>

        <Grid item xs={12} sm={6} lg={4} >
           
          <Paper className={classes.paper}>
    <div className={classes.svg1}>
        <Social />
        </div>
          {/* <img  alt="complex" src={Keep} />  */}
        {/* {<img className={classes.svg1} alt="complex" src={Keep} /> */} 
        
          
          </Paper>
          
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <Paper className={classes.paper}>
          <div className={classes.svg1}>
        <Mind />
        </div>
          </Paper>

          
        </Grid>


        <Grid item xs={12} sm={6} lg={4}>
          <Paper className={classes.paper}>


     <Grid>

<Box
  display="flex"
  flexWrap="nowrap"
  alignContent="flex-start"

  p={0.5}
  m={0.5}
  bgcolor="background.paper"
  css={{ maxWidth: 150, height: 100 }}
>
  &nbsp; &nbsp;

  <div className={classes.bold}>
  Mindful relationships. Better life.
      </div>
  
  </Box>

    

    <Box
  display="flex"
  flexWrap="nowrap"
  alignContent="flex-start"
  p={0.5}
  m={0.5}
  bgcolor="background.paper"
  css={{ maxWidth: 150, height: 100 }}
>
  {/* <Box p={0.5} bgcolor="grey.300"> */}
  {/* <DoneIcon > </DoneIcon> */}
  {/* <FontAwesomeIcon icon={faCoffee} /> */}
  <i className= 'fas fa-check' style={ {float:"left"}} />
  {/* </Box> */}
  &nbsp; &nbsp;

  <div className={classes.reach}>
  Choose positive people around you.
      </div>
  
  </Box>

  
  <Box
  display="flex"
  flexWrap="nowrap"
  alignContent="flex-start"
  p={0.5}
  m={0.5}
  bgcolor="background.paper"
  css={{ maxWidth: 150, height: 100 }}
>
  {/* <Box p={0.5} bgcolor="grey.300"> */}
  {/* <DoneIcon > </DoneIcon> */}
  {/* <FontAwesomeIcon icon={faCoffee} /> */}
  <i className= 'fas fa-check' style={ {float:"left"}} />
  {/* </Box> */}
  &nbsp; &nbsp;

  <div className={classes.reach}>
  Embrace deep relationships instead of many loose connections.
      </div>
  
  </Box>

  <Box
  display="flex"
  flexWrap="nowrap"
  alignContent="flex-start"
  p={0.5}
  m={0.5}
  bgcolor="background.paper"
  css={{ maxWidth: 150, height: 100 }}
>
  {/* <Box p={0.5} bgcolor="grey.300"> */}
  {/* <DoneIcon > </DoneIcon> */}
  {/* <FontAwesomeIcon icon={faCoffee} /> */}
  <i className= 'fas fa-check' style={ {float:"left"}} />
  {/* </Box> */}
  &nbsp; &nbsp;

  <div className={classes.reach}>
  
  Reflect after being in touch. People change. Your reminders can too.


  
      </div>
  
  </Box>
  </Grid>

</Paper>


</Grid>
          
      

        <Grid item xs={12} sm={6} lg={4}>
          <Paper className={classes.paper}>
          <Grid>

<Box
  display="flex"
  flexWrap="nowrap"
  alignContent="flex-start"

  p={0.5}
  m={0.5}
  bgcolor="background.paper"
  css={{ maxWidth: 150, height: 100 }}
>
 
  &nbsp; &nbsp;

  <div className={classes.bold}>
  Break free from social media.
      </div>
  
  </Box>

    

    <Box
  display="flex"
  flexWrap="nowrap"
  alignContent="flex-start"
  p={0.5}
  m={0.5}
  bgcolor="background.paper"
  css={{ maxWidth: 150, height: 100 }}
>
  {/* <Box p={0.5} bgcolor="grey.300"> */}
  {/* <DoneIcon > </DoneIcon> */}
  {/* <FontAwesomeIcon icon={faCoffee} /> */}
  <i className= 'fas fa-check' style={ {float:"left"}} />
  {/* </Box> */}
  &nbsp; &nbsp;

  <div className={classes.reach}>
  Birthday reminders without Facebook.
      </div>
  
  </Box>

  
  <Box
  display="flex"
  flexWrap="nowrap"
  alignContent="flex-start"
  p={0.5}
  m={0.5}
  bgcolor="background.paper"
  css={{ maxWidth: 150, height: 100 }}
>
  {/* <Box p={0.5} bgcolor="grey.300"> */}
  {/* <DoneIcon > </DoneIcon> */}
  {/* <FontAwesomeIcon icon={faCoffee} /> */}
  <i className= 'fas fa-check' style={ {float:"left"}} />
  {/* </Box> */}
  &nbsp; &nbsp;

  <div className={classes.reach}>
  Catch up by calling friends instead of scrolling through profiles.
      </div>
  
  </Box>

  <Box
  display="flex"
  flexWrap="nowrap"
  alignContent="flex-start"
  p={0.5}
  m={0.5}
  bgcolor="background.paper"
  css={{ maxWidth: 150, height: 100 }}
>
  {/* <Box p={0.5} bgcolor="grey.300"> */}
  {/* <DoneIcon > </DoneIcon> */}
  {/* <FontAwesomeIcon icon={faCoffee} /> */}
  <i className= 'fas fa-check' style={ {float:"left"}} />
  {/* </Box> */}
  &nbsp; &nbsp;

  <div className={classes.reach}>
  
  Avoid the rabbit hole of ads, distractions, and negative content.
  
      </div>
  
  </Box>
</Grid>
</Paper>
        </Grid>


        <Grid item xs={12} sm={6} lg={4}>
          <Paper className={classes.paper}>
    <div className={classes.stat}>
        <Media />
        </div>
          {/* <img  alt="complex" src={Keep} />  */}
        {/* {<img className={classes.svg1} alt="complex" src={Keep} /> */} 
        
          
          </Paper>
          
          
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
        <Paper className={classes.paper}>
    {/* <div className={classes.svg1}> */}
    <img style={{width:'300px'}} src='/static/birthday.jpeg' alt="Logo" />
        
        {/* </div> */}
          {/* <img  alt="complex" src={Keep} />  */}
        {/* {<img className={classes.svg1} alt="complex" src={Keep} /> */} 
        
          
          </Paper>
          
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
        <Paper className={classes.paper}><Grid>

<Box
  display="flex"
  flexWrap="nowrap"
  alignContent="flex-start"

  p={0.5}
  m={0.5}
  bgcolor="background.paper"
  css={{ maxWidth: 150, height: 100 }}
>
  {/* <Box p={0.5} bgcolor="grey.300"> */}
  {/* <DoneIcon > </DoneIcon> */}
  {/* <FontAwesomeIcon icon={faCoffee} /> */}
  {/* <i className= 'fas fa-check fa-2x' style={ {float:"left"}} /> */}
  {/* </Box> */}
  &nbsp; &nbsp;

  <div className={classes.bold}>
  Upcoming birthdays. See. Prepare. Celebrate.
      </div>
  
  </Box>

    

    <Box
  display="flex"
  flexWrap="nowrap"
  alignContent="flex-start"
  p={0.5}
  m={0.5}
  bgcolor="background.paper"
  css={{ maxWidth: 150, height: 100 }}
>
  {/* <Box p={0.5} bgcolor="grey.300"> */}
  {/* <DoneIcon > </DoneIcon> */}
  {/* <FontAwesomeIcon icon={faCoffee} /> */}
  <i className= 'fas fa-check' style={ {float:"left"}} />
  {/* </Box> */}
  &nbsp; &nbsp;

  <div className={classes.reach}>
  See birthdays in advance so you have time to prepare.
      </div>
  
  </Box>

  
  <Box
  display="flex"
  flexWrap="nowrap"
  alignContent="flex-start"
  p={0.5}
  m={0.5}
  bgcolor="background.paper"
  css={{ maxWidth: 150, height: 100 }}
>
  {/* <Box p={0.5} bgcolor="grey.300"> */}
  {/* <DoneIcon > </DoneIcon> */}
  {/* <FontAwesomeIcon icon={faCoffee} /> */}
  <i className= 'fas fa-check'  style={ {float:"left"}} />
  {/* </Box> */}
  &nbsp; &nbsp;

  <div className={classes.reach}>
  Reminders only for important people, not all contacts.
      </div>
  
  </Box>

  <Box
  display="flex"
  flexWrap="nowrap"
  alignContent="flex-start"
  p={0.5}
  m={0.5}
  bgcolor="background.paper"
  css={{ maxWidth: 150, height: 100 }}
>
  {/* <Box p={0.5} bgcolor="grey.300"> */}
  {/* <DoneIcon > </DoneIcon> */}
  {/* <FontAwesomeIcon icon={faCoffee} /> */}
  <i className= 'fas fa-check' style={ {float:"left"}} />
  {/* </Box> */}
  &nbsp; &nbsp;

  <div className={classes.reach}>
  
  Stay in control by having birthdays in your contact book.
  
      </div>
  
  </Box>




</Grid>
</Paper>
    
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <Paper className={classes.paper}><Grid>

<Box
  display="flex"
  flexWrap="nowrap"
  alignContent="flex-start"

  p={0.5}
  m={0.5}
  bgcolor="background.paper"
  css={{ maxWidth: 150, height: 100 }}
>
  {/* <Box p={0.5} bgcolor="grey.300"> */}
  {/* <DoneIcon > </DoneIcon> */}
  {/* <FontAwesomeIcon icon={faCoffee} /> */}
  {/* <i className= 'fas fa-check fa-2x' style={ {float:"left"}} /> */}
  {/* </Box> */}
  &nbsp; &nbsp;

  <div className={classes.bold}>
  See your stats. Make it a habit.
      </div>
  
  </Box>

    

    <Box
  display="flex"
  flexWrap="nowrap"
  alignContent="flex-start"
  p={0.5}
  m={0.5}
  bgcolor="background.paper"
  css={{ maxWidth: 150, height: 100 }}
>
  {/* <Box p={0.5} bgcolor="grey.300"> */}
  {/* <DoneIcon > </DoneIcon> */}
  {/* <FontAwesomeIcon icon={faCoffee} /> */}
  <i className= 'fas fa-check' style={ {float:"left"}} />
  {/* </Box> */}
  &nbsp; &nbsp;

  <div className={classes.reach}>
  Set a daily goal to catch up with some people.
      </div>
  
  </Box>

  
  <Box
  display="flex"
  flexWrap="nowrap"
  alignContent="flex-start"
  p={0.5}
  m={0.5}
  bgcolor="background.paper"
  css={{ maxWidth: 150, height: 100 }}
>
  {/* <Box p={0.5} bgcolor="grey.300"> */}
  {/* <DoneIcon > </DoneIcon> */}
  {/* <FontAwesomeIcon icon={faCoffee} /> */}
  <i className= 'fas fa-check' style={ {float:"left"}} />
  {/* </Box> */}
  &nbsp; &nbsp;

  <div className={classes.reach}>
  Track how many people you contacted over time.
      </div>
  
  </Box>

  <Box
  display="flex"
  flexWrap="nowrap"
  alignContent="flex-start"
  p={0.5}
  m={0.5}
  bgcolor="background.paper"
  css={{ maxWidth: 150, height: 100 }}
>
  {/* <Box p={0.5} bgcolor="grey.300"> */}
  {/* <DoneIcon > </DoneIcon> */}
  {/* <FontAwesomeIcon icon={faCoffee} /> */}
  <i className= 'fas fa-check' style={ {float:"left"}} />
  {/* </Box> */}
  &nbsp; &nbsp;

  <div className={classes.reach}>
  
  Balance reminders and time for them.
  
      </div>
  
  </Box>




</Grid>
</Paper>
        </Grid>

        <Grid item xs={12} sm={6} lg={4}>
        <Paper className={classes.paper}>
    <div className={classes.stat}>
        <Statistics />
        </div>
          {/* <img  alt="complex" src={Keep} />  */}
        {/* {<img className={classes.svg1} alt="complex" src={Keep} /> */} 
        
          
          </Paper>
          
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <Paper className={classes.paper}>
    <div className={classes.stat}>
        <Privacy1 />
        </div>
          {/* <img  alt="complex" src={Keep} />  */}
        {/* {<img className={classes.svg1} alt="complex" src={Keep} /> */} 
        
          
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} lg={4}>
          <Paper className={classes.paper}><Grid>

<Box
  display="flex"
  flexWrap="nowrap"
  alignContent="flex-start"

  p={0.5}
  m={0.5}
  bgcolor="background.paper"
  css={{ maxWidth: 150, height: 100 }}
>
  {/* <Box p={0.5} bgcolor="grey.300"> */}
  {/* <DoneIcon > </DoneIcon> */}
  {/* <FontAwesomeIcon icon={faCoffee} /> */}
  {/* <i className= 'fas fa-check fa-2x' style={ {float:"left"}} /> */}
  {/* </Box> */}
  &nbsp; &nbsp;

  <div className={classes.bold}>
  Privacy first. Offline. Easy to use.
      </div>
  
  </Box>

    

    <Box
  display="flex"
  flexWrap="nowrap"
  alignContent="flex-start"
  p={0.5}
  m={0.5}
  bgcolor="background.paper"
  css={{ maxWidth: 150, height: 100 }}
>
  {/* <Box p={0.5} bgcolor="grey.300"> */}
  {/* <DoneIcon > </DoneIcon> */}
  {/* <FontAwesomeIcon icon={faCoffee} /> */}
  <i className= 'fas fa-check' style={ {float:"left"}} />
  {/* </Box> */}
  &nbsp; &nbsp;

  <div className={classes.reach}>
  No signup. Works without an account.
      </div>
  
  </Box>

  
  <Box
  display="flex"
  flexWrap="nowrap"
  alignContent="flex-start"
  p={0.5}
  m={0.5}
  bgcolor="background.paper"
  css={{ maxWidth: 150, height: 100 }}
>
  {/* <Box p={0.5} bgcolor="grey.300"> */}
  {/* <DoneIcon > </DoneIcon> */}
  {/* <FontAwesomeIcon icon={faCoffee} /> */}
  <i className= 'fas fa-check' style={ {float:"left"}} />
  {/* </Box> */}
  &nbsp; &nbsp;

  <div className={classes.reach}>
  Your contacts stay on your device. No servers to get hacked.
      </div>
  
  </Box>

  <Box
  display="flex"
  flexWrap="nowrap"
  alignContent="flex-start"
  p={0.5}
  m={0.5}
  bgcolor="background.paper"
  css={{ maxWidth: 150, height: 100 }}
>
  {/* <Box p={0.5} bgcolor="grey.300"> */}
  {/* <DoneIcon > </DoneIcon> */}
  {/* <FontAwesomeIcon icon={faCoffee} /> */}
  <i className= 'fas fa-check' style={ {float:"left"}} />
  {/* </Box> */}
  &nbsp; &nbsp;

  <div className={classes.reach}>
  
  Add reminders and contacts in a batch or one by one.
  
      </div>
  
  </Box>




</Grid>
</Paper>
        </Grid>

        {/* <Grid item xs={12} sm={6} lg={4}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid> */}


        <Grid item xs={12} sm={6} lg={4}>
          <Paper className={classes.paper}><Grid>

<Box
  display="flex"
  flexWrap="nowrap"
  alignContent="flex-start"

  p={0.5}
  m={0.5}
  bgcolor="background.paper"
  css={{ maxWidth: 150, height: 100 }}
>
  {/* <Box p={0.5} bgcolor="grey.300"> */}
  {/* <DoneIcon > </DoneIcon> */}
  {/* <FontAwesomeIcon icon={faCoffee} /> */}
  {/* <i className= 'fas fa-check fa-2x' style={ {float:"left"}} /> */}
  {/* </Box> */}
  &nbsp; &nbsp;

  <div className={classes.bold}>
  Boost your professional network.
      </div>
  
  </Box>

    

    <Box
  display="flex"
  flexWrap="nowrap"
  alignContent="flex-start"
  p={0.5}
  m={0.5}
  bgcolor="background.paper"
  css={{ maxWidth: 150, height: 100 }}
>
  {/* <Box p={0.5} bgcolor="grey.300"> */}
  {/* <DoneIcon > </DoneIcon> */}
  {/* <FontAwesomeIcon icon={faCoffee} /> */}
  <i className= 'fas fa-check' style={ {float:"left"}} />
  {/* </Box> */}
  &nbsp; &nbsp;

  <div className={classes.reach}>
  Don’t just connect, but stay in the loop.
      </div>
  
  </Box>

  
  <Box
  display="flex"
  flexWrap="nowrap"
  alignContent="flex-start"
  p={0.5}
  m={0.5}
  bgcolor="background.paper"
  css={{ maxWidth: 150, height: 100 }}
>
  {/* <Box p={0.5} bgcolor="grey.300"> */}
  {/* <DoneIcon > </DoneIcon> */}
  {/* <FontAwesomeIcon icon={faCoffee} /> */}
  <i className= 'fas fa-check' style={ {float:"left"}} />
  {/* </Box> */}
  &nbsp; &nbsp;

  <div className={classes.reach}>
  More chances to help out and receive support.
      </div>
  
  </Box>

  <Box
  display="flex"
  flexWrap="nowrap"
  alignContent="flex-start"
  p={0.5}
  m={0.5}
  bgcolor="background.paper"
  css={{ maxWidth: 150, height: 100 }}
>
  {/* <Box p={0.5} bgcolor="grey.300"> */}
  {/* <DoneIcon > </DoneIcon> */}
  {/* <FontAwesomeIcon icon={faCoffee} /> */}
  <i className= 'fas fa-check' style={ {float:"left"}} />
  {/* </Box> */}
  &nbsp; &nbsp;

  <div className={classes.reach}>
  
  Stay in touch with existing connections.
  
      </div>
  
  </Box>




</Grid>
</Paper>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <Paper className={classes.paper}>
    <div className={classes.stat}>
        <Network />
        </div>
          {/* <img  alt="complex" src={Keep} />  */}
        {/* {<img className={classes.svg1} alt="complex" src={Keep} /> */} 
        
          
          </Paper>
        </Grid>


      </Grid>
      <div style={{ width: '100%', marginTop:'110px' }}>
      <Box display="flex"   flexWrap="nowrap" alignContent="flex-start" justifyContent="flex-start" m={1} p={1} bgcolor="background.paper">
        <Box flexGrow={1} p={1}>
          <Box  display="flex" justifyContent="center" >
          <i className="fas fa-brain fa-2x " style={{color:"brown"}}></i>
        </Box>
        <Box justifyContent="flex-end" textAlign="center" alignContent="flex-end">
        
        Become More Proactive
        </Box>
        </Box>
        <Box flexGrow={1} p={1}>
        <Box display="flex" justifyContent="center" >
        <i class="fas fa-plane fa-2x" style={{color:"brown"}}></i>
        </Box>
        <Box justifyContent="flex-end" textAlign="center" alignContent="flex-end">
        
        Become mindful People
        </Box>
        </Box>
        <Box flexGrow={1} p={1}>
        <Box  display="flex" justifyContent="center">
        <i class="fas fa-heart fa-2x" style={{color:"brown"}}></i>
        </Box>
        <Box justifyContent="flex-end" textAlign="center" alignContent="flex-end">
        
        Remember People Abroad
        </Box>
        </Box>
        <Box flexGrow={1} p={1}>
        <Box  display="flex" justifyContent="center">
        <i class="fas fa-check fa-2x" style={{color:"brown"}}></i>
        </Box>
        <Box justifyContent="flex-end" textAlign="center" alignContent="flex-end">
        
        Keep track of anyone.
        </Box>
        </Box>
      </Box>
     
     
    </div>
    <div className="right" style={{ width: '100%' }}>
      <Box display="flex" justifyContent="flex-end" m={1} p={1}  bgcolor="background.paper">
        <Box p={1}>

        <span className="right">
        <Button right="0px" align="top" variant="contained"  size="large"  size="40px" marginright="0" noLinkStyle href="/next1">
         LET'S GET STARTED <i className="fas fa-arrow-right &nbsp; &nbsp; fa-1x"></i>
        </Button>
 
      </span>
          
        </Box>
       
      </Box>
     
     
    </div>
      
      
    </div>
 
   
    {/* <div>
    <Button right="0px" align="top" variant="contained" size="medium"  size="20px" marginright="0"  noLinkStyle href="/">
       
    Let's get started
  
  </Button>
  </div> */}
  </>

  
  );
}


