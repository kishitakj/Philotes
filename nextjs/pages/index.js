import * as React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import Social from "./Social.svg";
import Svg1 from '../images/svg1.svg';
import Button from '@material-ui/core/Button';





export default function Index() {
  return (

     
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" component="h1" fontsize="40px" padding="10px" color="black" leftalign="200px" gutterBottom>
          Welcome to MyFolks!

        </Typography>

        <div className="para">
          <p> Want to rekindle your past contacts and revive that spark in your social life again ?</p>
        </div>
        
        
<div className="so">
        <Social />
        </div>
        
        
        
{/*         
       
        <Link href="/about" color="secondary">

          Go to the about page
        </Link> */}
        <div className="right">
       

        <span className="right">
        <Button right="0px" align="top" variant="contained" size="medium"  size="20px" marginright="0" component={Link} noLinkStyle href="/test">
          Next
        </Button>
 
      </span>
        </div>
        {/* <ProTip /> */}
        <Copyright />
      </Box>
      {/* <style jsx>{master}</style> */}
    </Container>
    
  );
  // <style jsx>{`
	// 	  h1 {
	// 	    font-size: 3rem;
  //       color: #ffffff;
	// 	  }
	// 	`}</style>
}

