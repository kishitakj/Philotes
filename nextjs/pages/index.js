import * as React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import Svg1 from '../images/svg1.svg';
// import master from "../styles/master";


export default function Index() {
  return (
    
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          hlkjkewNext.js v5-alpha example
        </Typography>
        {/* <h1>Next.js v5-alpha example</h1> */}
        <div className="svg">
        <Svg1/>
        </div>
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
        <Link href="/test">
          go to features page 
        </Link>
        <ProTip />
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

